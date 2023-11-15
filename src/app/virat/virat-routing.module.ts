import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViratPage } from './virat.page';

const routes: Routes = [
  {
    path: '',
    component: ViratPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViratPageRoutingModule {}
