import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TCredentials, TUserTicket } from 'src/app/shared/types/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private static readonly _accessTokenKey: string = 'at';
  private static readonly _refreshTokenKey: string = 'rk';

  static isLoggedIn(): boolean {
    return !!localStorage.getItem(this._accessTokenKey);
  }

  static getAccessToken(): string {
    return localStorage.getItem(this._accessTokenKey);
  }

  static setUserTicket(accessToken: string, refreshToken: string) {
    if (accessToken) {
      localStorage.setItem(this._accessTokenKey, accessToken);
    }

    if (refreshToken) {
      localStorage.setItem(this._refreshTokenKey, refreshToken);
    }
  }

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  login(credentials: TCredentials): Observable<TUserTicket> {
    return this._httpClient.post<TUserTicket>(`${environment.apiBaseUrl}/auth/login`, credentials);
  }
}