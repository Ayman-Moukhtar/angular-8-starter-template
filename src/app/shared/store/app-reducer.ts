import { ActionReducerMap } from '@ngrx/store';
import { TAppState } from './app-state';
import { routerReducer } from '@ngrx/router-store';
import homeReducer from 'src/app/home/state/home.reducer';

export const appReducer: ActionReducerMap<TAppState> = {
    home: homeReducer,
    router: routerReducer
};