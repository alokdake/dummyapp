import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Scenario1PageRoutingModule } from './scenario1-routing.module';

import { Scenario1Page } from './scenario1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Scenario1PageRoutingModule
  ],
  declarations: [Scenario1Page]
})
export class Scenario1PageModule {}
