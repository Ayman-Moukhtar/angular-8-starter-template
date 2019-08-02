import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  isLoggedIn(): boolean {
    if (environment.name === 'development') {
      return true;
    }

    return true;
  }
}