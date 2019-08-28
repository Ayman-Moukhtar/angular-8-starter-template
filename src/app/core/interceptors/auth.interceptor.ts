import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoreSelector } from '../state/core.selector';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly _coreSelector: CoreSelector
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this._coreSelector.accessToken$.pipe(
      map(token => token ? this.cloneRequest(request, token) : request),
      mergeMap(newRequest => next.handle(newRequest))
    );
  }

  cloneRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}