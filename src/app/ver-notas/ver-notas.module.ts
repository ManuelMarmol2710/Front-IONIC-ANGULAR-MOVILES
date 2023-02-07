import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerNotasPageRoutingModule } from './ver-notas-routing.module';

import { VerNotasPage } from './ver-notas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerNotasPageRoutingModule
  ],
  declarations: [VerNotasPage]
})
export class VerNotasPageModule {}
