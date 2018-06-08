import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'appRedux/reducers/index';
import watchAll from 'appRedux/saga';
import { TOGGLE_PLAYING } from 'appRedux/actions/types';
//import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

const customMiddleware = store => next => action => {
  if (action.type === TOGGLE_PLAYING) {
    let updatedAction = {
      ...action,
      created: new Date(),
    };
    next(updatedAction);
  }
  next(action);
};

const persistConfig = {
  key: 'awesome-player',
  storage: storage,
  //stateReconciler: autoMergeLevel2
};
const persistAppReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistAppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware, customMiddleware),
);

sagaMiddleware.run(watchAll);

export const persistor = persistStore(store);
