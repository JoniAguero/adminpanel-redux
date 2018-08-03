import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx/app.reducer';
import { AngularFirestore } from 'angularfire2/firestore';
import { IngresoEgreso } from '../models/IngresoEgreso.model';
import { AuthService } from '../auth/auth.service';
import { LoadingUIAction } from '../ngrx/UI/ui.actions';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  constructor(private _authService: AuthService,
              private afDB: AngularFirestore) { }

  createIngresoEgreso(data: IngresoEgreso) {

    const user = this._authService.getUserLogin();
    return this.afDB.doc(`${user.uid}/ingresos-egresos`)
              .collection('items')
              .add({...data});
  }
}
