import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module1cardPage } from './module1card.page';

const routes: Routes = [
  {
    path: '',
    component: Module1cardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module1cardPageRoutingModule {}
