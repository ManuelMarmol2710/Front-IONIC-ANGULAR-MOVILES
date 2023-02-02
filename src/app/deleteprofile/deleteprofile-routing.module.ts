import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteprofilePage } from './deleteprofile.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteprofilePageRoutingModule {}
