import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  AngularFirestore} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { BehaviorSubject} from 'rxjs';


//https://www.positronx.io/full-angular-firebase-authentication-system/
@Injectable()

export class AuthService {

  public isLoggedInSubject = new BehaviorSubject<boolean>(!!JSON.parse(localStorage.getItem('accessToken')));
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  public userDataSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('accessToken')));
  public userData$ = this.userDataSubject.asObservable();

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
  ) {

    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedInSubject.next(true);
        this.userDataSubject.next(user);
        localStorage.setItem("accessToken", JSON.stringify(user))

      } else {
        this.isLoggedInSubject.next(false);
        this.userDataSubject.next(null);  
        localStorage.removeItem('accessToken');
      }
    })
  }

  get userData(): any {
    return this.userDataSubject.value;
  }

  // Log in with email/password
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      const user = result.user;

      this.isLoggedInSubject.next(true);
      this.userDataSubject.next(user);
      localStorage.setItem("accessToken", JSON.stringify(user))


      this.router.navigate(['dashboard']);
      alert("Welcome back, " + user?.displayName + "!")

    }
    catch (error) {
      alert(error.message);
      this.logout()
    }
  }


  // Sign up with email/password
  async signup(displayName: string, email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      const user = result.user;

      await user?.updateProfile({
        displayName: displayName
      })

      try{
        this.postUserData(user, displayName)
      }
      catch(error){
        console.log(error)
      }

      this.router.navigate(['dashboard']);
      alert("Welcome, " + user?.displayName + "!")

    }
    catch (error) {
      alert(error.message);
    }
  }

  async postUserData (user , displayName:string) {
    return this.afs.collection('users').doc(user.uid).set({
      uid: user.uid,
      displayName: displayName,
      email: user.email,
      photoURL: user.photoURL,
    })
    .catch((error) => {
      window.alert(error.message);
    });
  };
  

  // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  // Reset Forggot password
  async ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Sign out
  async logout() {
    return this.afAuth.signOut().then(() => {
      console.log("logout success")

      this.router.navigate(['login']);
      this.isLoggedInSubject.next(false);
      this.userDataSubject.next(null);
      localStorage.removeItem('accessToken');
      
    });
  }

}