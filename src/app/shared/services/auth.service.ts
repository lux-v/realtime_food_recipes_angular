import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  AngularFirestore} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, throwError, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



//https://www.positronx.io/full-angular-firebase-authentication-system/
@Injectable({
  providedIn: 'root',
})

export class AuthService {
  userData = null// Save logged in user data

  isLoggedIn = !!JSON.parse(localStorage.getItem('accessToken')!);

  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  private userDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public userData$: Observable<any> = this.userDataSubject.asObservable();

  private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public user$: Observable<any> = this.userSubject.asObservable();

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

          this.loggedInSubject.next(true);
          this.userDataSubject.next(user);

          this.isLoggedIn = true;
          this.userData=user
          localStorage.setItem("accessToken", JSON.stringify(user))
      } else {
        console.log("logged out")
          this.loggedInSubject.next(false);
          this.userDataSubject.next(null);  
          this.isLoggedIn = false;
          this.userData=null
          localStorage.removeItem('accessToken');
      }
    })
  }

  getUserData() {
    return this.userData;
  }

  // Log in with email/password
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      const user = result.user;
      
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
    });
  }


  getUserDataById(userId: string): Observable<any> {
    if(!userId) return throwError("User id is required");

    return from(this.afs.collection("users").doc(userId).get()).pipe(
      tap((res: any) => {
        if (res.exists) {
          const user = { id: res.id, ...res.data() };
          this.userSubject.next(user);
        } else {
          throw new Error("User not found");
        }
      }),
      catchError((error) => {
        console.log("userId", userId);
        return throwError(error);
      })
    );
  }
}