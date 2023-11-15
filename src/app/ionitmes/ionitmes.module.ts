import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonitmesPageRoutingModule } from './ionitmes-routing.module';

import { IonitmesPage } from './ionitmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonitmesPageRoutingModule
  ],
  declarations: [IonitmesPage]
})
export class IonitmesPageModule {}
