import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TloginPageRoutingModule } from './tlogin-routing.module';

import { TloginPage } from './tlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TloginPageRoutingModule
  ],
  declarations: [TloginPage]
})
export class TloginPageModule {}
