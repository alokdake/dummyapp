import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module1cardPageRoutingModule } from './module1card-routing.module';

import { Module1cardPage } from './module1card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module1cardPageRoutingModule
  ],
  declarations: [Module1cardPage]
})
export class Module1cardPageModule {}
