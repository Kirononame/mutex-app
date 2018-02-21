import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
// import { Face } from '../../facebook/face-try';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  
  constructor(public navCtrl: NavController,
    public alerCtrl: AlertController,
    private fb: Facebook/*,
  public face: Face*/) {

    let MUTEX_ID = '182985342201823';
   }
  
  // let MUTEX_ID = '369359436859051';

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      buttons: ['Ok']
    });
    alert.present()
  }

  doLight() {
    this.fb.api('182985342201823/feed', ['email']);
  }


  dof() {

    // this.face.doLog();

    
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
    
    this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    
    // this.fb.api('182985342201823/feed', ['email']);
  }

}
