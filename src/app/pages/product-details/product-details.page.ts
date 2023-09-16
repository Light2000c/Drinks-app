import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  // swiperModules = [IonicSlides];

  public slide: number = 0;
  @ViewChild('swiper') swiperRef: ElementRef | undefined;

  constructor() { }

  ngOnInit() {
  }

	segmentChanged(ev: any) {
		this.swiperRef?.nativeElement.swiper.slideTo(Number(this.slide));
	}

}
