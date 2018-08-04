import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/app.reducer';
import { IngresoEgreso } from '../../models/IngresoEgreso.model';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit {

  private montoIngreso = 0;
  private montoEgreso = 0;

  private cantIngreso = 0;
  private cantEgreso = 0;

  // Graficas
  public doughnutChartLabels: string[];
  public doughnutChartData: number[];
  public doughnutChartType = 'doughnut';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('ie').subscribe( data => {
      this.calcularValores(data.ie);
    });
  }

  calcularValores( data: IngresoEgreso [] ) {
    data.forEach( element => {
      if (element.tipo === 'ingreso') {
        this.cantIngreso ++;
        this.montoIngreso += element.monto;
      } else {
        this.cantEgreso++;
        this.montoEgreso += element.monto;
      }
      this.doughnutChartLabels = ['Egresos', 'Ingresos'];
      this.doughnutChartData = [this.montoEgreso, this.montoIngreso];
    });
  }

}
