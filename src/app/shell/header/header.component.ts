import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CoreSelector } from 'src/app/core/state/core.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  
  constructor(
    private readonly _coreSelector: CoreSelector
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this._coreSelector.isLoggedIn$;
  }
}