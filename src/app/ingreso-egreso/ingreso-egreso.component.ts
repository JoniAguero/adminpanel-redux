import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { IngresoEgresoService } from './ingreso-egreso.service';

import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx/app.reducer';
import { LoadingUIAction, NotLoadingUIAction } from '../ngrx/UI/ui.actions';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit {

  formIE: FormGroup ;
  tipo = 'ingreso';

  isLoading = false;

  constructor(private _ingresoEgresoService: IngresoEgresoService,
              private store: Store<AppState>) { }

  ngOnInit() {

    this.formIE = new FormGroup({
      'descripcion': new FormControl('', Validators.required),
      'monto': new FormControl(0, Validators.min(1))
    });

    this.store.select('ui').subscribe( res => {
      this.isLoading = res.isLoading;
    });

  }

  create() {
    this.store.dispatch( new LoadingUIAction() );
    this._ingresoEgresoService.createIngresoEgreso({...this.formIE.value, tipo: this.tipo, date: new Date().getTime()})
          .then( res => {
            this.store.dispatch(new NotLoadingUIAction());
            Swal('Creado', '', 'success');
          })
          .catch(err => {
            this.store.dispatch(new NotLoadingUIAction());
            Swal('Error', err, 'error');
          });
  }

}
