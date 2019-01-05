import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AfService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      });
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/login']));
  }

  signInRegular(email: string, password: string) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    this.router.navigate(['/dashboard']);
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) {
    const auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }
}
