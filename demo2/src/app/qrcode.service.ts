// src/app/qrcode.service.ts
import { Injectable } from '@angular/core';
 

import AraleQRCode from "arale-qrcode";
 

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {
 
  constructor() { }
   /*
  generateQRCode(text: string, elementId: string): void {
    new QRCode(document.getElementById(elementId), {
      text: text,
      width: 128,
      height: 128,
      correctLevel: QRCode.CorrectLevel.H
    });
  }
     */
  createQRCode(text:string) :void{
    const code = new AraleQRCode({
      render: "svg",
      text: text,
      size: 100,
    });
    const codeContainer = document.querySelector(".code-container") as HTMLElement;
    if (codeContainer) {
      codeContainer.appendChild(code);
    }
  }
}