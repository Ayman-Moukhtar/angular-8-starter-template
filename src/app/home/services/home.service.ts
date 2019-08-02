import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TJsonPlaceHolder } from '../types/home.models';

@Injectable()
export class HomeService {
  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get<TJsonPlaceHolder[]>('https://jsonplaceholder.typicode.com/posts');
  }
}