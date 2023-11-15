import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlokPageRoutingModule } from './alok-routing.module';

import { AlokPage } from './alok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlokPageRoutingModule
  ],
  declarations: [AlokPage]
})
export class AlokPageModule {}
