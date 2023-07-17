import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloginPage } from './flogin.page';

const routes: Routes = [
  {
    path: '',
    component: FloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloginPageRoutingModule {}
