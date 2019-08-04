import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TAppState } from 'src/app/shared/store/app-state';
import { TCredentials } from 'src/app/shared/types/auth';
import { login } from './core.actions';

@Injectable()
export class CoreDispatcher {
  constructor(
    private readonly _store: Store<TAppState>
  ) { }

  public login(credentials: TCredentials) {
    this._store.dispatch(login(credentials));
  }
}