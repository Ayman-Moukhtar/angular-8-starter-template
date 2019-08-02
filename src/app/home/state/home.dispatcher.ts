import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleShowTitleAction, loadAllData, changeFirstPlaceholderAction } from './home.actions';
import { TAppState } from 'src/app/shared/store/app-state';

@Injectable()
export class HomeDispatcher {
  constructor(
    private readonly _store: Store<TAppState>
  ) { }

  public toggleShowTitle() {
    this._store.dispatch(toggleShowTitleAction());
  }

  public loadAllData() {
    this._store.dispatch(loadAllData());
  }

  public changeFirstPlaceholder() {
    this._store.dispatch(changeFirstPlaceholderAction());
  }
}