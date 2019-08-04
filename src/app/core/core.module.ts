import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthService } from './services/auth.service';
import { EventBusService } from './services/event-bus.service';
import { SubjectService } from './services/subject.service';
import { EnsureModuleLoadedOnceGuard } from './guards/import.guard';
import { AuthGuard } from './guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import coreReducer from './state/core.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffect } from './state/core.effect';
import { CoreSelector } from './state/core.selector';
import { CoreDispatcher } from './state/core.dispatcher';

@NgModule({
  imports: [
    StoreModule.forFeature('core', coreReducer),
    EffectsModule.forFeature([CoreEffect]),
  ],
  exports: [BrowserAnimationsModule, HttpClientModule],
  providers: [
    AuthGuard,
    AuthService,
    EventBusService,
    SubjectService,
    CoreSelector,
    CoreDispatcher,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // This is to prevent core module from being imported more than once
  // as it only contains singleton services that once imported into AppModule will be shared accross the app
  // @SkipSelf: skip the current injector and look for the dependency in the parent injector
  // @Optional: parentModule can be undefined, ideally it should
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
