import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService } from '../auth.service';
import { LoadingUIAction } from '../../ngrx/UI/ui.actions';
import { AppState } from '../../ngrx/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit, OnDestroy {

  loading: boolean;
  suscription: Subscription;

  constructor(private _authService: AuthService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.suscription = this.store.subscribe(res => {
                          this.loading = res.ui.isLoading;
                        });
  }

  onSubmit(data: any) {
    const action = new LoadingUIAction();
    this.store.dispatch(action);
    this._authService.login(data.email, data.password);
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

}
