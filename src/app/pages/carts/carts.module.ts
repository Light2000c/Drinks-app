import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartsPageRoutingModule } from './carts-routing.module';

import { CartsPage } from './carts.page';
import { GeneralModule } from 'src/app/modules/general/general.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartsPageRoutingModule,
    GeneralModule
  ],
  declarations: [CartsPage]
})
export class CartsPageModule {}
