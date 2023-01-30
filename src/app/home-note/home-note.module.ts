import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeNotePageRoutingModule } from './home-note-routing.module';

import { HomeNotePage } from './home-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeNotePageRoutingModule
  ],
  declarations: [HomeNotePage]
})
export class HomeNotePageModule {}
