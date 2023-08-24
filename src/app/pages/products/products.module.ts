import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { GeneralModule } from 'src/app/modules/general/general.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    GeneralModule
  ],
  declarations: [ProductsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsPageModule {}
