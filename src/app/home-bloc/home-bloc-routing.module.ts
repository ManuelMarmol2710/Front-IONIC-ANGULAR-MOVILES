import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBlocPage } from './home-bloc.page';


const routes: Routes = [
  {
    path: ':owner',
    component: HomeBlocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeBlocPageRoutingModule {}
