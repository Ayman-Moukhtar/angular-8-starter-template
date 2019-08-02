import { Component, OnInit } from '@angular/core';
import { HomeSelector } from './state/home.selector';
import { Observable } from 'rxjs';
import { HomeDispatcher } from './state/home.dispatcher';
import { TJsonPlaceHolder } from './types/home.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userId', 'title'];
  showTitle$: Observable<boolean>;
  jsonPlaceholders$: Observable<TJsonPlaceHolder[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private readonly _dispatcher: HomeDispatcher,
    private readonly _selector: HomeSelector
  ) { }

  ngOnInit() {
    this.showTitle$ = this._selector.showTitle$;
    this.jsonPlaceholders$ = this._selector.jsonPlaceHolders$;
    this.isLoading$ = this._selector.isLoading$;

    this._dispatcher.loadAllData();
  }

  getItemId = (_, { id }: TJsonPlaceHolder) => id;

  toggleShowTitle() {
    this._dispatcher.toggleShowTitle();
  }

  changeFirstPlaceholder() {
    this._dispatcher.changeFirstPlaceholder();
  }
}
