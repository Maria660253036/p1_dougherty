import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage {
	
	name: String;
	quantity: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.name = navParams.get('name');
	  this.quantity = navParams.get('quantity');

  }
	buyClick() {
	  this.navCtrl.popToRoot();
  }
}