import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'appRedux/reducers/index';
import watchAll from 'appRedux/saga';
import { USER_LOGGED_IN, USER_LOGGED_OUT } from 'appRedux/actions/types';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

const customMiddleware = store => next => action => {
  const authFromLocalStorage = JSON.parse(JSON.parse(localStorage.getItem('persist:awesome-player')).auth);
  const actions = (action.type === USER_LOGGED_IN)
    || (action.type.includes('@@redux-form'));
  if (store.getState().auth.userLoggedIn && !authFromLocalStorage.userLoggedIn) {
    let updatedAction = {
      ...action,
      type: (actions) ? action.type : USER_LOGGED_OUT,
    };
    next(updatedAction);
  }
  next(action);
};

const persistConfig = {
  key: 'awesome-player',
  storage: storage,
  blacklist: ['search', 'form'],
  stateReconciler: autoMergeLevel2,
};
const persistAppReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistAppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware, customMiddleware),
);

sagaMiddleware.run(watchAll);

export const persistor = persistStore(store);
