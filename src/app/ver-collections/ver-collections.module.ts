import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerCollectionsPageRoutingModule } from './ver-collections-routing.module';

import { VerCollectionsPage } from './ver-collections.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerCollectionsPageRoutingModule
  ],
  declarations: [VerCollectionsPage]
})
export class VerCollectionsPageModule {}
