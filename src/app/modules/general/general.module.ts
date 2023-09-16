import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitButtonComponent } from 'src/app/components/submit-button/submit-button.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ProductCardComponent } from 'src/app/components/product-card /product-card.component';
import { CartComponent } from 'src/app/components/cart/cart.component';



@NgModule({
  declarations: [SubmitButtonComponent, HeaderComponent, ProductCardComponent, CartComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SubmitButtonComponent, HeaderComponent, ProductCardComponent, CartComponent]
})
export class GeneralModule { }
