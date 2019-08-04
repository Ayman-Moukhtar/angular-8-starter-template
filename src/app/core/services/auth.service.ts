import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TCredentials } from 'src/app/shared/types/auth';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private static readonly _accessTokenKey: string = 'at';
  // private readonly _refreshTokenKey: string = 'rk';

  static isLoggedIn(): boolean {
    return !!localStorage.getItem(this._accessTokenKey);
  }

  static getAccessToken(): string {
    return localStorage.getItem(this._accessTokenKey);
  }

  static setAccessToken(token: string) {
    localStorage.setItem(this._accessTokenKey, token);
  }

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  login(credentials: TCredentials) {
    return this._httpClient.post<any>(`${environment.apiBaseUrl}/auth/login`, credentials);
  }
}