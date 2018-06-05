import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'appRedux/reducers/index';
import watchAll from 'appRedux/saga';
//import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'awesome-player',
  storage: storage,
  //stateReconciler: autoMergeLevel2
};
const persistAppReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistAppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchAll);

export const persistor = persistStore(store);
