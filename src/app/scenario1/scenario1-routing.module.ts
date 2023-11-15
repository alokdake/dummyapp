import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scenario1Page } from './scenario1.page';

const routes: Routes = [
  {
    path: '',
    component: Scenario1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Scenario1PageRoutingModule {}
