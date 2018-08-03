import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../auth/auth.service';
import { IngresoEgresoService } from '../ingreso-egreso/ingreso-egreso.service';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private afDB: AngularFirestore,
                private _ingresoEgresoService: IngresoEgresoService) { }

    obtenerItemsIngresoEgreso() {
        this._ingresoEgresoService.IngresoEgresoListener();
    }


}
