import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarNotaPageRoutingModule } from './editar-nota-routing.module';

import { EditarNotaPage } from './editar-nota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarNotaPageRoutingModule
  ],
  declarations: [EditarNotaPage]
})
export class EditarNotaPageModule {}
