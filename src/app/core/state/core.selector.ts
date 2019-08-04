import { Injectable } from '@angular/core';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TAppState } from 'src/app/shared/store/app-state';
import { TCoreState } from '../types/core-state';

const getCoreState = createFeatureSelector<TCoreState>('core');

const getIsLoggedIn = createSelector(
  getCoreState,
  ({ isLoggedIn }: TCoreState) => isLoggedIn
);

const getIsLoading = createSelector(
  getCoreState,
  ({ isLoading }: TCoreState) => isLoading
);

const getAccessToken = createSelector(
  getCoreState,
  ({ accessToken }: TCoreState) => accessToken
);

@Injectable()
export class CoreSelector {
  readonly isLoggedIn$: Observable<boolean> = this._store.select(getIsLoggedIn);
  readonly isLoading$: Observable<boolean> = this._store.select(getIsLoading);
  readonly accessToken$: Observable<string> = this._store.select(getAccessToken);

  constructor(private readonly _store: Store<TAppState>) { }
}