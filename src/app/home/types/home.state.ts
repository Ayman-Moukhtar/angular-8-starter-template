import { TJsonPlaceHolder } from './home.models';

type THomeState = {
  showTitle: boolean,
  jsonPlaceholders: TJsonPlaceHolder[],
  isLoading: boolean
};

export { 
  THomeState
};