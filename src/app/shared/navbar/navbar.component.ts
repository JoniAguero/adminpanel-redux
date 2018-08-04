import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/app.reducer';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {

  nombre: string;
  subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('user')
                        .pipe( filter(res => res.user !== null))
                        .subscribe( res => {
                        this.nombre = res.user.nombre;
                        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
