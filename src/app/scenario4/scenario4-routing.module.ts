import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scenario4Page } from './scenario4.page';

const routes: Routes = [
  {
    path: '',
    component: Scenario4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Scenario4PageRoutingModule {}
