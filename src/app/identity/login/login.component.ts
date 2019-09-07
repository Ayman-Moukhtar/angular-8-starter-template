import { Component, OnInit } from '@angular/core';
import { CoreDispatcher } from 'src/app/core/state/core.dispatcher';
import { CoreSelector } from 'src/app/core/state/core.selector';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    form: FormGroup;

    isLoading$: Observable<boolean> = this._coreSelector.isLoading$;

    constructor(
        private readonly _coreSelector: CoreSelector,
        private readonly _coreDispatcher: CoreDispatcher,
        private readonly _formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.form = this._formBuilder.group({
            email: [''],
            password: ['']
        });
    }

    login() {
        const { email, password } = this.form.value;
        this._coreDispatcher.login({ Email: email, Password: password });
    }
}