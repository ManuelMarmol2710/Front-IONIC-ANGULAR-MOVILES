import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeNotePage } from './home-note.page';

const routes: Routes = [
  {
    path: '',
    component: HomeNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeNotePageRoutingModule {}
