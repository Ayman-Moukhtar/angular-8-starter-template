import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TEmittedEvent, TAppEvent } from 'src/app/shared/types/event-bus';

@Injectable()
export class EventBusService implements OnDestroy {
  private readonly _subject$ = new Subject<any>();

  on(event: TAppEvent, action: any): Subscription {
    return this._subject$.pipe(
      filter((emitted: TEmittedEvent) => emitted.event === event),
      map((emitted: TEmittedEvent) => emitted.data)
    ).subscribe(action);
  }

  emit(event: TEmittedEvent) {
    this._subject$.next(event);
  }

  ngOnDestroy() {
    this._subject$.complete();
    this._subject$.unsubscribe();
  }
}