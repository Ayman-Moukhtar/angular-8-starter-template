import { Injectable } from '@angular/core';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { THomeState } from '../types/home.state';
import { TJsonPlaceHolder } from '../types/home.models';
import { RouterReducerState } from '@ngrx/router-store';
import { TAppState } from 'src/app/shared/store/app-state';

const getHomeState = createFeatureSelector<THomeState>('home');

const getRouterState = createFeatureSelector<RouterReducerState>('router');

const getShowTitle = createSelector(
  getHomeState,
  ({ showTitle }: THomeState) => showTitle
);

const getJsonPlaceHolders = createSelector(
  getHomeState,
  ({ jsonPlaceholders }: THomeState) => jsonPlaceholders
);

const getIsLoading = createSelector(
  getHomeState,
  ({ isLoading }: THomeState) => isLoading
);

@Injectable()
export class HomeSelector {
  readonly showTitle$: Observable<boolean> = this._store.select(getShowTitle);
  readonly jsonPlaceHolders$: Observable<TJsonPlaceHolder[]> = this._store.select(getJsonPlaceHolders);
  readonly isLoading$: Observable<boolean> = this._store.select(getIsLoading);
  readonly router$: Observable<RouterReducerState> = this._store.select(getRouterState);

  constructor(private readonly _store: Store<TAppState>) { }
}