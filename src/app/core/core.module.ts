import { NgModule, APP_INITIALIZER, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthService } from './services/auth.service';
import { EventBusService } from './services/event-bus.service';
import { SubjectService } from './services/subject.service';
import { EnsureModuleLoadedOnceGuard } from './guards/import.guard';
import { AuthGuard } from './guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const init = () => () => undefined; // Do any app initialization work;

@NgModule({
  exports: [BrowserAnimationsModule, HttpClientModule],
  providers: [
    AuthGuard,
    AuthService,
    EventBusService,
    SubjectService,
    {
      provide: APP_INITIALIZER,
      useFactory: init,
      deps: [], // Add services needed for the init function.
      multi: true
    },
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
