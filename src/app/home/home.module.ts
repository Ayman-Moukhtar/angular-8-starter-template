import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './services/home.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import homeReducer from './state/home.reducer';
import { HomeSelector } from './state/home.selector';
import { HomeDispatcher } from './state/home.dispatcher';
import { HomeEffect } from './state/home.effect';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    HomeRoutingModule, 
    SharedModule, 
    RouterModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffect])
  ],
  declarations: [HomeRoutingModule.components],
  providers: [HomeService, HomeSelector, HomeDispatcher, HomeEffect]
})
export class HomeModule { }
