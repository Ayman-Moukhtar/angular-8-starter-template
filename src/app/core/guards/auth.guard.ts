import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CoreSelector } from '../state/core.selector';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly _router: Router,
    private readonly _coreSelector: CoreSelector
  ) { }

  canActivate() {
    return this._coreSelector.isLoggedIn$.pipe(
      tap(isLoggedIn => !isLoggedIn && this._router.navigateByUrl('/identity/login'))
    );
  }
}