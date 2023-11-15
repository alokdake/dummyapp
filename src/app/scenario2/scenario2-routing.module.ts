import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scenario2Page } from './scenario2.page';

const routes: Routes = [
  {
    path: '',
    component: Scenario2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Scenario2PageRoutingModule {}
