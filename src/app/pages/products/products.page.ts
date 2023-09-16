import { Component, NgZone, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { CupertinoPane } from 'cupertino-pane';
import { UtilitiesProvider } from 'src/app/provider/utilities/utilities';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {


  public products: any = [
    {name: "Martini Prosecco 75cl", price: "5,950", image: "Martini Prosecco 75cl.jpeg"},
    {name: "Gran Castellflorit Gran Castellflorit Dry White Wine 750ml", price: "4,365", image: "Gran Castellflorit Gran Castellflorit Dry White Wine 750ml.jpeg"},
    {name: "Alcoholic wine", price: "3,500", image: "magic-moment2.png"},
    {name: "1 B&G White Wine 75cl", price: "3,500", image: "B&G White Wine 75cl.jpeg"},
    {name: "Jameson Black Barrel 70cl", price: "17,500", image: "Jameson Black Barrel 70cl.jpeg"},
  ];

  public products2: any = [
    {name: "Jameson Black Barrel 70cl", price: "17,500", image: "Jameson Black Barrel 70cl.jpeg"},
    {name: "Gran Castellflorit Gran Castellflorit Dry White Wine 750ml", price: "4,365", image: "Gran Castellflorit Gran Castellflorit Dry White Wine 750ml.jpeg"},
    {name: "Martini Prosecco 75cl", price: "5,950", image: "Martini Prosecco 75cl.jpeg"},
    {name: "Alcoholic wine", price: "3,500", image: "magic-moment2.png"},
    {name: "1 B&G White Wine 75cl", price: "3,500", image: "B&G White Wine 75cl.jpeg"},
  ];

  public pane!: CupertinoPane;
  

  swiperModules = [IonicSlides];

  constructor(
    public utilities: UtilitiesProvider,
    public zone: NgZone,
  ) { }

  ngOnInit() {
    this.pane = this.utilities.createPane("#pane-content", {
			fitHeight: true,
			events: {
				onDidDismiss: () => {
					this.zone.run(() => {
					});
				},
			},
		});
  }

  public showPane(){
    this.pane.present({animate: true});
    this.pane.calcFitHeight();
		this.pane.disableDrag();
  }


}
