import { RouterReducerState } from '@ngrx/router-store';
import { THomeState } from 'src/app/home/types/home.state';
import { TCoreState } from 'src/app/core/types/core-state';

type TAppState = {
  router: RouterReducerState,
  home: THomeState,
  core: TCoreState
};

export {
  TAppState
};