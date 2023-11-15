import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Scenario3PageRoutingModule } from './scenario3-routing.module';

import { Scenario3Page } from './scenario3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Scenario3PageRoutingModule,
  ],
  declarations: [Scenario3Page],
})
export class Scenario3PageModule {}
