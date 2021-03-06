import { createStore, combineReducers } from 'redux';

import settings from './reducer/settings';
import drinks from './reducer/drinks';

const store = createStore(
  combineReducers({
    settings,
    drinks,
  })
);

export default store;
