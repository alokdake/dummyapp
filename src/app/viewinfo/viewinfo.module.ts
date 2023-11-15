import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewinfoPageRoutingModule } from './viewinfo-routing.module';

import { ViewinfoPage } from './viewinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewinfoPageRoutingModule
  ],
  declarations: [ViewinfoPage]
})
export class ViewinfoPageModule {}
