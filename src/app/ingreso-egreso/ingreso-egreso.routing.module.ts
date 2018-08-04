import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

// import { AuthGuardService } from './auth/auth-guard.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { dashboardRoutes } from '../dashboard/dashboard.routes';


const routes: Routes = [

    {
        path: '',
        component: DashboardComponent,
        children: dashboardRoutes,
        // canActivate: [ AuthGuardService ]
    },
];


@NgModule({

    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class IngresoEgresoRoutingModule { }
