import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerNotasPage } from './ver-notas.page';

const routes: Routes = [
  {
    path: '',
    component: VerNotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerNotasPageRoutingModule {}
