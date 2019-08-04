import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShellRoutingModule } from './shell-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducer } from '../shared/store/app-reducer';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducer),
    StoreRouterConnectingModule.forRoot(),
    CoreModule,
    SharedModule,
    FormsModule,
    ShellRoutingModule,
    StoreDevtoolsModule.instrument({
      name: 'App DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  declarations: [
    ShellComponent,
    HeaderComponent
  ],
  bootstrap: [ShellComponent]
})
export class ShellModule { }