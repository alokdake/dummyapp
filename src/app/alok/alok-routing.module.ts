import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlokPage } from './alok.page';

const routes: Routes = [
  {
    path: '',
    component: AlokPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlokPageRoutingModule {}
