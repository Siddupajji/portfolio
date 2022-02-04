import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebdevComponent } from './webdev/webdev.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GraphicComponent } from './graphic/graphic.component';
import { ApplicationComponent } from './application/application.component';
import { SmmComponent } from './smm/smm.component';
import { PhotoComponent } from './photo/photo.component';



@NgModule({
  declarations: [
    AppComponent,
    WebdevComponent,
    HomeComponent,
    NavbarComponent,
    GraphicComponent,
    ApplicationComponent,
    SmmComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
