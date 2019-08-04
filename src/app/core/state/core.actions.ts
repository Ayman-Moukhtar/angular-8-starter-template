import actionCreatorFactory from 'typescript-fsa';
import { TCredentials } from 'src/app/shared/types/auth';

enum CoreActions {
  LOGIN = '[CORE] LOGIN'
}

const actionCreator = actionCreatorFactory();

const loginAction = actionCreator.async<TCredentials, any, {}>(CoreActions.LOGIN);
const login = loginAction.started;

export {
  CoreActions,
  login,
  loginAction
};