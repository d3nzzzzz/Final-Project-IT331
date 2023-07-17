import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TregPageRoutingModule } from './treg-routing.module';

import { TregPage } from './treg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TregPageRoutingModule
  ],
  declarations: [TregPage]
})
export class TregPageModule {}
