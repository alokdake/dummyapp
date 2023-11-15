import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FireService {
  constructor(
    public fireStore: AngularFirestore, //database of firebase
    public auth: AngularFireAuth //auth of email & password
  ) {}

  userRegistration(data: any) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  saveUserDetails(data: any) {
    return this.fireStore.collection('registeredUsers').doc(data.uid).set(data);
  }

  loginWithEmail(data: any) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  getDetails(data: any) {
    return this.fireStore
      .collection('registeredUsers')
      .doc(data.uid)
      .valueChanges();
  }
}
