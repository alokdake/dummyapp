import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scenario3Page } from './scenario3.page';

const routes: Routes = [
  {
    path: '',
    component: Scenario3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Scenario3PageRoutingModule {}
