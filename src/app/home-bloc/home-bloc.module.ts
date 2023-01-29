import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeBlocPageRoutingModule } from './home-bloc-routing.module';

import { HomeBlocPage } from './home-bloc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeBlocPageRoutingModule
  ],
  declarations: [HomeBlocPage]
})
export class HomeBlocPageModule {}
