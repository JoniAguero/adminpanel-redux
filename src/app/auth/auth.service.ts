import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

import Swal from 'sweetalert2';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../models/User.model';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx/app.reducer';
import { LoadingUIAction, NotLoadingUIAction } from '../ngrx/UI/ui.actions';
import { SetUserAction } from '../ngrx/User/user.actions';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubscription: Subscription = new Subscription();
  private usuario: User;

  constructor( private afAuth: AngularFireAuth,
               private router: Router,
               private afDB: AngularFirestore,
               private store: Store<AppState> ) { }

  isAuthenticated() {
    this.afAuth.authState.subscribe((fbUser: firebase.User) => {

      if (fbUser) {
        this.userSubscription = this.afDB.doc(`${fbUser.uid}/usuario`).valueChanges()
                  .subscribe( (user: any) => {
                    const userSave = new User(user);
                    this.store.dispatch(new SetUserAction(userSave));
                    this.usuario = userSave;
                  });
      } else {
        this.usuario = null;
        this.userSubscription.unsubscribe();
      }

    });

  }
  createUser(email: string, password: string, nombre: string) {

    this.store.dispatch( new LoadingUIAction() );

    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then( resp => {

      const user: User = {
        nombre: nombre,
        email: resp.user.email,
        uid: resp.user.uid
      };

      console.log(user);

      this.afDB.doc(`${ user.uid }/usuario`)
          .set(user)
          .then( () => {
            this.router.navigate(['/']);
            this.store.dispatch(new NotLoadingUIAction());
          });

    }).catch( err => {
      this.store.dispatch(new NotLoadingUIAction());
      Swal('Error', err.message, 'error');
    });
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(resp => {
      this.router.navigate(['/']);
      this.store.dispatch(new NotLoadingUIAction());
    }).catch(err => {
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

  getUserLogin() {
    return {...this.usuario};
  }

}
