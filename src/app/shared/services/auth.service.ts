import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  AngularFirestore} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import {  BehaviorSubject, Subject } from 'rxjs';

//https://www.positronx.io/full-angular-firebase-authentication-system/
@Injectable({
  providedIn: 'root',
})

export class AuthService {
  
  userData = null// Save logged in user data

  isLoggedIn = !!JSON.parse(localStorage.getItem('accessToken')!);

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
          //for now I am saving every data about the user...
    
          console.log("logged in")
          this.isLoggedIn = true;
          this.userData=(user);
          localStorage.setItem("accessToken", JSON.stringify(user))
      } else {
        console.log("logged out")
          this.isLoggedIn = false;
          this.userData=(null);
          localStorage.removeItem('accessToken');
      }
    })
  }

  getUserData() {
    return this.userData;
  }

  // Log in with email/password
  async login(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {

        const user = result.user;

        alert("Welcome back, " + user?.email + "!")

      })
      .catch((error) => {
        window.alert(error.message);
        this.logout()
      });
  }
  // Sign up with email/password
  async signup(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        // this.SendVerificationMail();
        // this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
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
    });
  }
}