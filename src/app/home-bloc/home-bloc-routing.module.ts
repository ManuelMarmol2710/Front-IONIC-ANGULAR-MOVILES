import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBlocPage } from './home-bloc.page';
import { Component } from '@angular/core'; 
import { AlertController } from '@ionic/angular';

const routes: Routes = [
  {
    path: '/home-note/:owner',
    component: HomeBlocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeBlocPageRoutingModule {}
