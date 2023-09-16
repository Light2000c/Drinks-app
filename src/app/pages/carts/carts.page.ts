import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.page.html',
  styleUrls: ['./carts.page.scss'],
})
export class CartsPage implements OnInit {


  public carts: any = [
    {name: "Jameson Black Barrel 70cl", price: "17,500", image: "Jameson Black Barrel 70cl.jpeg"},
    {name: "Martini Prosecco 75cl", price: "5,950", image: "Martini Prosecco 75cl.jpeg"},
    {name: "Gran Castellflorit Gran Castellflorit Dry White Wine 750ml", price: "4,365", image: "Gran Castellflorit Gran Castellflorit Dry White Wine 750ml.jpeg"},
    {name: "Alcoholic wine", price: "3,500", image: "magic-moment2.png"},
    {name: "1 B&G White Wine 75cl", price: "3,500", image: "B&G White Wine 75cl.jpeg"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
