import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActionSheetController } from '@ionic/angular';
import { NgxQrcodeElementTypes } from 'ngx-qrcode2';
@Component({
  selector: 'app-view-qr',
  templateUrl: './view-qr.page.html',
  styleUrls: ['./view-qr.page.scss'],
})
export class ViewQrPage implements OnInit {
  elementType = NgxQrcodeElementTypes.URL;
  sharingText:string="ViitorCloud ionic Qr Code Assignment."
  emailSubject:string = 'Scan QR Code.';
  recipent:any = ['khushboo.madhur@viitor.cloud'];
  inputValue='';
  generatedValue = '';
  link: string='https://viitorcloud.com/';
imageUrl:any;
  constructor(
    private socialSharing: SocialSharing,
    private actionSheetController: ActionSheetController) { 
      this.generate();
    }

  ngOnInit() {

  }
  generate() {
    // this.generatedValue=this.inputValue;
    const result = Math.random().toString(36).substring(2,7);
    this.generatedValue=result;
    console.log(this.generatedValue);
  }


  async selectActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'You can share Via:',
      subHeader: 'Select any of action below to proceed.',
      cssClass: 'basicActionSheet',
      buttons: [
        {
        text: 'WhatsApp',
        icon: 'logo-whatsapp',
        cssClass: 'settingActionSheet',
        handler: () => {
          this.socialShare('whatsApp');
        }
      },
      {
        text: 'Facebook',
        icon: 'logo-facebook',
        cssClass: 'settingActionSheet',
        handler: () => {
          this.socialShare('facebook');
        }
      },
      {
        text: 'Gmail',
        icon: 'mail',
        cssClass: 'settingActionSheet',
        handler: () => {
          this.socialShare('gmail');
        }
      },
      {
        text: 'Instagram',
        icon: 'logo-instagram',
        cssClass: 'settingActionSheet',
        handler: () => {
          this.socialShare('instagram');
        }
      },
      {
        text: 'Twitter',
        icon: 'logo-twitter',
        cssClass: 'settingActionSheet',
        handler: () => {
          this.socialShare('twitter');
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
    });
    await actionSheet.present();
  }

  socialShare(selectedOption){
    let elem=document.querySelector('.qrcode>img');
    if(elem != null){
      this.imageUrl=elem.getAttribute('src');

      let options={
        message: this.generatedValue,
        imageUrl: this.imageUrl,
        link: this.link
      }
      if(selectedOption==='whatsApp'){
        this.socialSharing.shareViaWhatsApp(this.generatedValue,this.imageUrl,this.link)
      }
      else if(selectedOption==='facebook'){
        this.socialSharing.shareViaFacebook(this.generatedValue,this.imageUrl)
      }
      else if(selectedOption==='gmail'){
        this.socialSharing.shareViaEmail(this.sharingText,this.emailSubject , this.recipent, null, null,this.imageUrl,)
      }
      else if(selectedOption==='instagram'){
        this.socialSharing.shareViaInstagram(this.generatedValue,this.imageUrl)
      }
      else if(selectedOption==='twitter'){
        this.socialSharing.shareViaTwitter(this.generatedValue,this.imageUrl,null)
      }
    }
   
  }


}
