import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QrcodeService } from './qrcode.service';
//import QRCode from 'arale-qrcode';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo3';
}
