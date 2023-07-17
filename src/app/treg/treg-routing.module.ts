import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TregPage } from './treg.page';

const routes: Routes = [
  {
    path: '',
    component: TregPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TregPageRoutingModule {}
