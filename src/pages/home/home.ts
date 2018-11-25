import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }
  
  public ionViewWillEnter(){
      this.menu.swipeEnable(false);
  }  

  public ionViewDidLeave(){
    this.menu.swipeEnable(true);
  }
  
  public login() {
    this.navCtrl.setRoot('CategoriasPage');
   }

}
