import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


export class HomePage implements OnInit {

  public categories: any = [
    {name: "Beer"},
    {name: "Wine"},
    {name: "Soft"},
    {name: "Alcohol Wine"},
    {name: "Juice"},
    {name: "Non-Alcoholic Wine"},
  ];

  public products: any = [
    {name: "Alcoholic wine", price: "3,500", image: "magic-moment2.png"},
    {name: "1 B&G White Wine 75cl", price: "3,500", image: "B&G White Wine 75cl.jpeg"},
    {name: "Martini Prosecco 75cl", price: "5,950", image: "Martini Prosecco 75cl.jpeg"},
    {name: "Gran Castellflorit Gran Castellflorit Dry White Wine 750ml", price: "4,365", image: "Gran Castellflorit Gran Castellflorit Dry White Wine 750ml.jpeg"},
    {name: "Jameson Black Barrel 70cl", price: "17,500", image: "Jameson Black Barrel 70cl.jpeg"},
  ];

  public products2: any = [
    {name: "Jameson Black Barrel 70cl", price: "17,500", image: "Jameson Black Barrel 70cl.jpeg"},
    {name: "Gran Castellflorit Gran Castellflorit Dry White Wine 750ml", price: "4,365", image: "Gran Castellflorit Gran Castellflorit Dry White Wine 750ml.jpeg"},
    {name: "Martini Prosecco 75cl", price: "5,950", image: "Martini Prosecco 75cl.jpeg"},
    {name: "Alcoholic wine", price: "3,500", image: "magic-moment2.png"},
    {name: "1 B&G White Wine 75cl", price: "3,500", image: "B&G White Wine 75cl.jpeg"},
  ];

  swiperModules = [IonicSlides];


  constructor() { }

  ngOnInit() {
  }

}
