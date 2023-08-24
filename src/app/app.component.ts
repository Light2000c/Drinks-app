import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

	public is_light: boolean = true;

  constructor(
    public plt: Platform
  ) {
	this.init();
  }

 async init(){
  await this.plt.ready();
  }

}
