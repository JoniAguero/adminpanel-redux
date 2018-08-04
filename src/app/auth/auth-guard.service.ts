import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';
import { take } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private router: Router, public _authService: AuthService) { }

  canActivate() {
    return this._authService.isAuth();
  }

  canLoad() {
    return this._authService.isAuth()
                            .pipe( take(1));
  }

}
