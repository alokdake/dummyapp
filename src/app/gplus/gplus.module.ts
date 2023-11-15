import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GplusPageRoutingModule } from './gplus-routing.module';

import { GplusPage } from './gplus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GplusPageRoutingModule
  ],
  declarations: [GplusPage]
})
export class GplusPageModule {}
