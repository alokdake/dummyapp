import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonitmesPage } from './ionitmes.page';

const routes: Routes = [
  {
    path: '',
    component: IonitmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonitmesPageRoutingModule {}
