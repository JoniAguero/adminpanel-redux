import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { IngresoEgresoService } from './ingreso-egreso.service';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit {

  formIE: FormGroup ;
  tipo = 'ingreso';

  constructor(private _ingresoEgresoService: IngresoEgresoService) { }

  ngOnInit() {

    this.formIE = new FormGroup({
      'descripcion': new FormControl('', Validators.required),
      'monto': new FormControl(0, Validators.min(1))
    });

  }

  create() {

    this._ingresoEgresoService.createIngresoEgreso({...this.formIE.value, tipo: this.tipo})
          .then( res => console.log(res))
          .catch(err => console.log(err));
  }

}
