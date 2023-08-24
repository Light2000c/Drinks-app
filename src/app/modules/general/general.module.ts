import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitButtonComponent } from 'src/app/components/submit-button/submit-button.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ProductCardComponent } from 'src/app/components/product-card /product-card.component';



@NgModule({
  declarations: [SubmitButtonComponent, HeaderComponent, ProductCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SubmitButtonComponent, HeaderComponent, ProductCardComponent]
})
export class GeneralModule { }
