import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { QRCodeModule } from 'arale-qrcode';
import AraleQRCode from 'arale-qrcode';
//console.log('QRCodeModule',QRCodeModule)
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
