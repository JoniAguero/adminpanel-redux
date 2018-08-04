import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { DetalleComponent } from './detalle/detalle.component';
import { DetallePipe } from './detalle/detalle.pipe';
import { IngresoEgresoRoutingModule } from './ingreso-egreso.routing.module';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, ChartsModule, SharedModule, IngresoEgresoRoutingModule
  ],
  declarations: [
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    DetallePipe]
})
export class IngresoEgresoModule { }
