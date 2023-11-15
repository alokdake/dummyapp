import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module1PageRoutingModule } from './module1-routing.module';

import { Module1Page } from './module1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Module1PageRoutingModule,
  ],
  declarations: [Module1Page],
})
export class Module1PageModule {}
