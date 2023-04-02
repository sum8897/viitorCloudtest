import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner ,BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage implements OnInit {
  public scannedValue: string='';

  constructor(public scanner:BarcodeScanner,public router:Router) { }

  ngOnInit() {
  }
 scan(){
  const options: BarcodeScannerOptions = {
    showFlipCameraButton: true,
    showTorchButton: true,
    torchOn: false,
    resultDisplayDuration: 400,
    orientation: 'portrait',
  };
  this.scanner.scan(options).then(barcodeData => {
    this.scannedValue=barcodeData.text
  }).catch(err => {
    console.log('Error', err);
  });
 }
}
