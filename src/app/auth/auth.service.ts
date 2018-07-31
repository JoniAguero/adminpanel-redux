import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

import Swal from 'sweetalert2';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afAuth: AngularFireAuth,
               private router: Router,
               private afDB: AngularFirestore ) { }

  isAuthenticated() {
    this.afAuth.authState.subscribe((fbUser: firebase.User) => {
      console.log(fbUser);
    });

  }
  createUser(email: string, password: string, nombre: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then( resp => {

      const user: User = {
        nombre: nombre,
        email: resp.user.email,
        uid: resp.user.uid
      };

      this.afDB.doc(`${ user.uid }/usuario`)
          .set(user)
          .then( () => {
            this.router.navigate(['/']);
          });

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

  isAuth() {
    return this.afAuth.authState.pipe( // authSate devuelve un booleano
      map( fbUser => {
        if (fbUser == null) {
          this.router.navigate(['/login']);
        }
        return fbUser != null;
      }) // Pipe hace retornar un booleano
    );
  }

}
