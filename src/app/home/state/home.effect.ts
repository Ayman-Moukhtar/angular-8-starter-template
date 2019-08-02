import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HomeService } from '../services/home.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { loadAllDataAction, HomeActions } from './home.actions';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class HomeEffect {

  @Effect()
  loadData$: Observable<Action> = this._actions$.pipe(
    ofType(`${HomeActions.LOAD_ALL_DATA}_STARTED`),
    switchMap(
      () => this._homeService.getAll().pipe(
        map(result => loadAllDataAction.done({ result })),
        catchError(error => of(loadAllDataAction.failed({ error })))
      )
    )
  );
  
  constructor(
    private readonly _actions$: Actions,
    private readonly _homeService: HomeService
  ) { }
}