import { Component } from '@angular/core';
//import { QRCodeCorrectLevel } from 'arale-qrcode';
//import * as QRCode from 'arale-qrcode';  
import AraleQRCode from 'arale-qrcode';


//import QRCode from 'qrcode';
@Component({
  selector: 'app-root',
   template: `<div #qrCode></div>`,
 //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  textToEncode = 'https://www.example.com';
  //QRCodeCorrectLevel = QRCodeCorrectLevel;
  /*
  ngAfterViewInit() {
    QRCode.createQrCode({
      text: 'Hello, world!',
      width: 256,
      height: 256,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
  }
    */
  toQRImage(approvalId: string): void {

    const qrcodeSvg = new AraleQRCode({
      render: 'svg',
      text: approvalId,
      size: 145,
      foreground: '#000',
      imageSize: 50
    });
    const show_qrcode = document.getElementById("polling-qrcode");
    show_qrcode.appendChild(qrcodeSvg); 
  } 
}
