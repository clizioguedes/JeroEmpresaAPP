import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AuthInfo } from './auth-info';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfService {

  static UNKNOWN_USER = new AuthInfo(null);
  authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AfService.UNKNOWN_USER);

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
  }

  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/login']));
      console.log('Logout realizado com Sucesso');
  }

  signInRegular(email, password): Observable<AuthInfo> {
    return this.fromFirebaseAuthPromise(this._firebaseAuth.auth.signInWithEmailAndPassword(email, password));
  }

  fromFirebaseAuthPromise(promise): Observable<any> {
    const subject = new Subject<any>();
    promise
      .then((res: any) => {
        const authInfo = new AuthInfo(this._firebaseAuth.auth.currentUser.uid);
        this.authInfo$.next(authInfo);
        subject.next(res);
        subject.complete();
        this.router.navigate(['/index']);
      },
        (err: any) => {
          this.authInfo$.error(err);
          subject.next(err);
          subject.complete();
          console.log(err);
          location.reload();
        });

    return subject.asObservable();
  }

  async resetPassword(email: string) {
    const auth = firebase.auth();
    try {
      await auth.sendPasswordResetEmail(email);
      return console.log('email enviado');
    } catch (error) {
      return console.log(error);
    }
  }
}

/*
  async SignIn(email: string, password: string) {
    try {
      const result = await this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/index']);
    } catch (error) {
      window.alert(error.message);
    }
  }
  */
