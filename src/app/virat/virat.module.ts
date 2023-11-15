import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViratPageRoutingModule } from './virat-routing.module';

import { ViratPage } from './virat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViratPageRoutingModule
  ],
  declarations: [ViratPage]
})
export class ViratPageModule {}
