import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerCollectionsPage } from './ver-collections.page';

const routes: Routes = [
  {
    path: ':owner',
    component: VerCollectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerCollectionsPageRoutingModule {}
