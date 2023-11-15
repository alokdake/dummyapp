import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Scenario2PageRoutingModule } from './scenario2-routing.module';

import { Scenario2Page } from './scenario2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Scenario2PageRoutingModule,
  ],
  declarations: [Scenario2Page],
})
export class Scenario2PageModule {}
