import { toggleShowTitleAction, loadAllDataAction, changeFirstPlaceholderAction } from './home.actions';
import { THomeState } from '../types/home.state';
import { isType, AnyAction } from 'typescript-fsa';
import { tail } from 'ramda';

const initialState: THomeState = {
  showTitle: true,
  jsonPlaceholders: [],
  isLoading: false
};

export default (state: THomeState = initialState, action: AnyAction): THomeState => {
  if (isType(action, toggleShowTitleAction)) {
    return {
      ...state,
      showTitle: !state.showTitle
    };
  }

  if (isType(action, loadAllDataAction.started)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (isType(action, loadAllDataAction.done)) {
    return {
      ...state,
      jsonPlaceholders: action.payload.result,
      isLoading: false
    };
  }

  if (isType(action, changeFirstPlaceholderAction)) {
    return {
      ...state,
      jsonPlaceholders: [
        { id: 1, userId: 1, title: 'Changed', body: 'Changed' },
        ...tail(state.jsonPlaceholders)
      ],
      isLoading: false
    };
  }

  return state;
};