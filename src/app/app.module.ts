import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlaykudoComponent } from './playkudo/playkudo.component';
import { WinComponent } from './win/win.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaykudoComponent,
    WinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
