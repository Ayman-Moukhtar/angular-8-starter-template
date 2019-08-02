import { CanActivate } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService) { }

  canActivate() {
    return this._authService.isLoggedIn();
  }
}