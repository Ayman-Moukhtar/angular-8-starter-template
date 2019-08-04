import { AnyAction, isType } from 'typescript-fsa';
import { TCoreState } from '../types/core-state';
import { loginAction } from './core.actions';
import { AuthService } from '../services/auth.service';

const initialState: TCoreState = {
  isLoggedIn: AuthService.isLoggedIn(),
  accessToken: AuthService.getAccessToken(),
  isLoading: false
};

export default (state: TCoreState = initialState, action: AnyAction): TCoreState => {
  if (isType(action, loginAction.started)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (isType(action, loginAction.done)) {
    return {
      ...state,
      isLoggedIn: true,
      isLoading: false
    };
  }

  if (isType(action, loginAction.failed)) {
    return {
      ...state,
      isLoggedIn: false,
      isLoading: false
    };
  }

  return state;
};