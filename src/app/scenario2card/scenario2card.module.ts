import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Scenario2cardPageRoutingModule } from './scenario2card-routing.module';

import { Scenario2cardPage } from './scenario2card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Scenario2cardPageRoutingModule
  ],
  declarations: [Scenario2cardPage]
})
export class Scenario2cardPageModule {}
