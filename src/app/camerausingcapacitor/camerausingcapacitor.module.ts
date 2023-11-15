import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamerausingcapacitorPageRoutingModule } from './camerausingcapacitor-routing.module';

import { CamerausingcapacitorPage } from './camerausingcapacitor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamerausingcapacitorPageRoutingModule
  ],
  declarations: [CamerausingcapacitorPage]
})
export class CamerausingcapacitorPageModule {}
