import   { QRCodeModule  } from 'angular2-qrcode';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }