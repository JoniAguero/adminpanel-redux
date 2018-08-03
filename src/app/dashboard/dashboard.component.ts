import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboad.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  user: any;

  constructor(private _dashboardService: DashboardService) { }

  ngOnInit() {
    this._dashboardService.obtenerItemsIngresoEgreso();
  }

}
