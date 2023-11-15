import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamerausingcapacitorPage } from './camerausingcapacitor.page';

const routes: Routes = [
  {
    path: '',
    component: CamerausingcapacitorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamerausingcapacitorPageRoutingModule {}
