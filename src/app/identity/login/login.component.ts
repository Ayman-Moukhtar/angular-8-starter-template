import { Component } from '@angular/core';
import { CoreDispatcher } from 'src/app/core/state/core.dispatcher';
import { CoreSelector } from 'src/app/core/state/core.selector';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLoading$: Observable<boolean> = this._coreSelector.isLoading$;

    constructor(
        private readonly _coreSelector: CoreSelector,
        private readonly _coreDispatcher: CoreDispatcher
    ) { }

    login() {
        this._coreDispatcher.login({ Email: 'user@user.com', Password: 'P@ssw0rd' });
    }
}