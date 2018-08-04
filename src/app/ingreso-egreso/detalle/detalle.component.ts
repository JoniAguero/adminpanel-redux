import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ie from '../../ngrx/Ingreso-Egreso/ingreso-egreso.reduce';
import { IngresoEgreso } from '../../models/IngresoEgreso.model';
import { IngresoEgresoService } from '../ingreso-egreso.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

  items: IngresoEgreso[];

  constructor(private _ingresoEgresoService: IngresoEgresoService,
    private store: Store<ie.AppState>) { }

  ngOnInit() {
    this.store.select('ie').subscribe( res => {
      this.items = res.ie;
    });
  }

  deleteItem(uid: string) {
    this._ingresoEgresoService.deleteItem(uid)
            .then(res => Swal('Eliminado', `El ítem fue eliminado!`, 'success'))
            .catch( err => {
              Swal('Ops', `Error al elminar el item!`, 'error');
            });
  }

}
