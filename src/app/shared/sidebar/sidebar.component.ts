import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService } from '../../auth/auth.service';
import { AppState } from '../../ngrx/app.reducer';
import { NotLoadingUIAction } from '../../ngrx/UI/ui.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(private _authService: AuthService,
              private store: Store<AppState>) { }

  ngOnInit() {
  }

  signOut() {
    this._authService.logout();
    const action = new NotLoadingUIAction();
    this.store.dispatch(action);
  }

}
