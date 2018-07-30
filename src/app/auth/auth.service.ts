import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afAuth: AngularFireAuth,
               private router: Router ) { }

  isAuthenticated() {
    this.afAuth.authState.subscribe((fbUser: firebase.User) => {
      console.log(fbUser);
    });

  }
  createUser(email: string, password: string, nombre: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then( resp => {
      this.router.navigate(['/']);
    }).catch( err => {
      console.error( err );
      Swal('Error', err.message, 'error');
    });
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(resp => {
      this.router.navigate(['/']);
    }).catch(err => {
      console.error(err);
      Swal('Error', err.message, 'error');
    });
  }

  logout() {
    this.router.navigate(['/login']);
    this.afAuth.auth.signOut();
  }

}
