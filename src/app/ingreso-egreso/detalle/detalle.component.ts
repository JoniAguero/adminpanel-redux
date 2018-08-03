import { Component, OnInit } from '@angular/core';
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../../ngrx/app.reducer';
import { IngresoEgreso } from '../../models/IngresoEgreso.model';
import { IngresoEgresoService } from '../ingreso-egreso.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

  items: IngresoEgreso[];

  constructor(private _ingresoEgresoService: IngresoEgresoService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('ie').subscribe( res => {
      this.items = res.ie;
    });
  }

}
