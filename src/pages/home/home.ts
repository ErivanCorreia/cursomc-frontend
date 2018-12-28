import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(
     public navCtrl: NavController,
     public menu: MenuController,
     public auth: AuthService) {
  }
  
  public ionViewWillEnter(){
      this.menu.swipeEnable(false);
  }  

  public ionViewDidLeave(){
    this.menu.swipeEnable(true);
  }
  
  public login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        console.log(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
      
      error => {});
    }

}
