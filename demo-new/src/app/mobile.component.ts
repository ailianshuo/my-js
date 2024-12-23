import AraleQRCode from 'arale-qrcode';
export class MobileApproveUIComponent {
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