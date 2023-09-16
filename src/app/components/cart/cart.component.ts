import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent  implements OnInit {

 @Input() cart: any;

  constructor() { }

  ngOnInit() {}

  public formatWord(word: string){
    let new_word;
    if(word.length > 15){
      new_word = word.slice(0,13);
    }else{
      new_word = word;
    }
    return new_word;
  }
}
