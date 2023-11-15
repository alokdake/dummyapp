import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Scenario4PageRoutingModule } from './scenario4-routing.module';

import { Scenario4Page } from './scenario4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Scenario4PageRoutingModule,
  ],
  declarations: [Scenario4Page],
})
export class Scenario4PageModule {}
