import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { SubSink } from 'subsink';

@Injectable()
export class SubjectService implements OnDestroy {
  // Example subject.
  private readonly _aboutInitSubject$ = new Subject();
  private readonly _subscriptions$ = new SubSink();

  constructor() {
    this._subscriptions$.add(this._aboutInitSubject$);
  }

  // Example implementation for the example subject
  onAboutInit(action: () => void): Subscription {
    return this._aboutInitSubject$.subscribe(action);
  }

  // Example implementation for the example subject
  emitAboutInit() {
    this._aboutInitSubject$.next();
  }

  ngOnDestroy() {
    this._subscriptions$.unsubscribe();
  }
}