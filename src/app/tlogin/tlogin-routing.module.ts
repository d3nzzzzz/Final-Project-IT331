import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TloginPage } from './tlogin.page';

const routes: Routes = [
  {
    path: '',
    component: TloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TloginPageRoutingModule {}
