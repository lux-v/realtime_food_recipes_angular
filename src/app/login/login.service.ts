import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// import firebase from 'firebase/app';
// import "firebase/auth"
// import "firebase/firestore"

// import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  // userData: Observable<firebase.User>;

  constructor(
    // private firestore: firestore.Firestore 
    ) { 
  }


  
//   signup=async(email: string, password: string, displayName: string) =>{
//     await firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
//       let user = res.user;

//       user.updateProfile({
//         displayName: displayName
//       });

//       try {
//         //create DB entry for the user
//         this.postUserData(user, displayName)
//     } catch (err) {
//         console.log("Error posting user data: ", err)
//     }

//      console.log('You are Successfully signed up!', res);
//     }
//     ).catch(error => {
//       console.log('Something is wrong:', error.message);
//     }
//     );  
//   }  

// async login (email, password) {
//     try {
//         const res = await firebase.auth().signInWithEmailAndPassword(email, password)
//         const user = res.user;

//     }
//     catch (err) {
        
//         await this.logout()
//     }
// }

// logout = async () => {
//     await firebase.auth().signOut();

// }

// updateUserProfile = async (newUserData) => {
//   const currentUser = firebase.auth().currentUser;
//   const userUid = currentUser.uid

//   //only display name and the imageURL - defined by Firebase
//   await currentUser.updateProfile(newUserData)
//       .then(res => {
//           this.putUserData({ ...newUserData, uid: userUid })
//       })
//       .catch(err => { throw err })
// }

// resetPassword = (email) => {
//   return firebase.auth().sendPasswordResetEmail(email)
// }



//   postUserData = async (user, displayName) => {
//     return this.firestore
//       .collection("users")
//       .doc(user.uid)
//       .set({
//         uid: user.uid,
//         displayName: displayName,
//         email: user.email,
//         photoURL: user.photoURL,
//       })
//       .catch((error) => {
//         console.log("Error posting user data: ", error);
//         throw error;
//       });
//   };

//   putUserData = async (user) => {
//     return this.firestore
//       .collection("users")
//       .doc(user.uid)
//       .update({
//         ...user,
//       })
//       .catch((error) => {
//         console.log("Error updating user data: ", error);
//         throw error;
//       });
//   };

}






