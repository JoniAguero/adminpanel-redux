import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit {

  formIE: FormGroup ;
  tipo: 'ingreso';

  constructor() { }

  ngOnInit() {

    this.formIE = new FormGroup({
      'description': new FormControl('', Validators.required),
      'monto': new FormControl(0, Validators.min(0))
    });

  }

}
