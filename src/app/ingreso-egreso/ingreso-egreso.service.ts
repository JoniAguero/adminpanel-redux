import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { IngresoEgreso } from '../models/IngresoEgreso.model';
import { AuthService } from '../auth/auth.service';
import { Store } from '../../../node_modules/@ngrx/store';
import { AppState } from '../ngrx/app.reducer';
import { filter, map } from 'rxjs/operators';
import { SetIngresoEgresoAction } from '../ngrx/Ingreso-Egreso/ingreso-egreso.actions';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  ingresoEgresoListenerSubscription: Subscription = new Subscription();
  ingresoEgresoItemsSubscription: Subscription = new Subscription();

  itemsIngresoEgreso: IngresoEgreso [];

  constructor(private _authService: AuthService,
              private afDB: AngularFirestore,
              private store: Store<AppState>) { }

  createIngresoEgreso(data: IngresoEgreso) {

    const user = this._authService.getUserLogin();
    return this.afDB.doc(`${user.uid}/ingresos-egresos`)
              .collection('items')
              .add({...data});
  }

  IngresoEgresoListener() {

    this.ingresoEgresoListenerSubscription = this.store.select('user')
              .pipe ( filter( user => user.user != null ) )
              .subscribe(user => this.getItemsIngresoEgreso(user.user.uid));

  }

  getItemsIngresoEgreso(uid: string) {
    this.ingresoEgresoItemsSubscription = this.afDB.collection(`${uid}/ingresos-egresos/items`)
              .snapshotChanges()
              .pipe(map( items => {
                return items.map( doc => { return {
                  uid: doc.payload.doc.id,
                  ...doc.payload.doc.data()
                };
              });
             }))
             .subscribe( (items: any) => {
               this.itemsIngresoEgreso = items;
               this.store.dispatch(new SetIngresoEgresoAction(this.itemsIngresoEgreso));
             });
  }

  unsubscribeSubscriptios() {
    this.ingresoEgresoItemsSubscription.unsubscribe();
    this.ingresoEgresoListenerSubscription.unsubscribe();
  }

}
