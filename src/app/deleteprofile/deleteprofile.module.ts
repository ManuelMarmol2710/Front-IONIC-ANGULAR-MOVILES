import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DeleteprofilePageRoutingModule } from './deleteprofile-routing.module';

import { DeleteprofilePage } from './deleteprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteprofilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DeleteprofilePage]
})
export class DeleteprofilePageModule {}
