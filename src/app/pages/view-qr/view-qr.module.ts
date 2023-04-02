import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewQrPageRoutingModule } from './view-qr-routing.module';

import { ViewQrPage } from './view-qr.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewQrPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [ViewQrPage]
})
export class ViewQrPageModule {}
