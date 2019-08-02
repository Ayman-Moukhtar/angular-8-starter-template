import { RouterReducerState } from '@ngrx/router-store';
import { THomeState } from 'src/app/home/types/home.state';

type TAppState = {
  router: RouterReducerState,
  home: THomeState
};

export {
  TAppState
};