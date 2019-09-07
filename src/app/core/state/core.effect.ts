import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { CoreActions, loginAction } from './core.actions';
import { AuthService } from '../services/auth.service';
import { Action, Failure, Success } from 'typescript-fsa';
import { TCredentials } from 'src/app/shared/types/auth';
import { Router } from '@angular/router';

@Injectable()
export class CoreEffect {

  @Effect()
  login$: Observable<Action<Success<TCredentials, any>> | Observable<Failure<TCredentials, any>>> = this._actions$.pipe(
    ofType(`${CoreActions.LOGIN}_STARTED`),
    map(({ payload }: Action<TCredentials>) => payload),
    switchMap(
      (payload: TCredentials) => this._authService.login(payload).pipe(
        tap(result => AuthService.setUserTicket(result.accessToken, result.refreshToken)),
        tap(() => this._router.navigateByUrl('/')),
        map(result => loginAction.done({ result, params: payload })),
        catchError(error => of(loginAction.failed({ error, params: payload })))
      )
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) { }
}