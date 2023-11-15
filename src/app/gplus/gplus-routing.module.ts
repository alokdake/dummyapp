import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GplusPage } from './gplus.page';

const routes: Routes = [
  {
    path: '',
    component: GplusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GplusPageRoutingModule {}
