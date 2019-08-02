import actionCreatorFactory from 'typescript-fsa';
import { TJsonPlaceHolder } from '../types/home.models';

enum HomeActions {
  TOGGLE_SHOW_TITLE = '[HOME] TOGGLE SHOW TITLE',
  LOAD_ALL_DATA = '[HOME] LOAD ALL DATA',
  CHANGE_FIRST_PLACEHOLDER = '[HOME] CHANGE FIRST PLACEHOLDER',
}

const actionCreator = actionCreatorFactory();

const toggleShowTitleAction = actionCreator(HomeActions.TOGGLE_SHOW_TITLE);

const loadAllDataAction = actionCreator.async<undefined, TJsonPlaceHolder[], {}>(HomeActions.LOAD_ALL_DATA);
const loadAllData = () => loadAllDataAction.started();

const changeFirstPlaceholderAction = actionCreator(HomeActions.CHANGE_FIRST_PLACEHOLDER);

export {
  toggleShowTitleAction,
  loadAllDataAction,
  HomeActions,
  loadAllData,
  changeFirstPlaceholderAction
};