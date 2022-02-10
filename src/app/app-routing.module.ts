import { RadioComponent } from './radio/radio.component';
import { PhotoComponent } from './photo/photo.component';
import { SmmComponent } from './smm/smm.component';
import { GraphicComponent } from './graphic/graphic.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { WebdevComponent } from './webdev/webdev.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
 },
 {
   path: 'home',
   component: HomeComponent
 },

  {
    path: 'web',
    component: WebdevComponent
  },
  {
    path: 'graphic',
    component: GraphicComponent
  },
  {
    path: 'application',
    component: ApplicationComponent
  },
  {
    path: 'smm',
    component: SmmComponent
  },
  {
    path: 'photo',
    component: PhotoComponent
  },
  {
    path: 'radio',
    component: RadioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
