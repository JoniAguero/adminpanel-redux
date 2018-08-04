import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService } from '../../auth/auth.service';
import { AppState } from '../../ngrx/app.reducer';
import { NotLoadingUIAction } from '../../ngrx/UI/ui.actions';
import { filter } from 'rxjs/operators';
import { Subscription } from 'node_modules/rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {

  nombre: string;
  subscription: Subscription = new Subscription();

  constructor(private _authService: AuthService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('user')
      .pipe(filter(res => res.user !== null))
      .subscribe(res => {
        this.nombre = res.user.nombre;
      });
  }

  signOut() {
    this._authService.logout();
    const action = new NotLoadingUIAction();
    this.store.dispatch(action);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
