import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/app.reducer';
import { Subscription } from 'rxjs';
import { LoadingUIAction } from '../../ngrx/UI/ui.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {

  loading: boolean;
  suscription: Subscription = new Subscription();

  constructor(private _authService: AuthService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.suscription = this.store.subscribe(res => {
                          this.loading = res.ui.isLoading;
                        });
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

  onSubmit( data: any ) {
    const action = new LoadingUIAction();
    this.store.dispatch(action);
    this._authService.createUser(data.email, data.password, data.nombre);
  }



}
