import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  constructor(public navCtrl: NavController) {

  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });  

  onSubmit(){
    console.log(this.loginForm.value);
    if(this.loginForm.value){
      this.navCtrl.setRoot(HomePage);
    }
  }
}
