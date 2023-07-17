import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloginPageRoutingModule } from './flogin-routing.module';

import { FloginPage } from './flogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloginPageRoutingModule
  ],
  declarations: [FloginPage]
})
export class FloginPageModule {}
