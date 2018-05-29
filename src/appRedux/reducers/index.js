import { combineReducers } from 'redux';
import playlistReducer from './playlistReducer';
import currentSongReducer from './currentSongReducer';
import searchReducer from "./searchReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'
import confirmationReducer from "./confirmationReducer";


const rootReducer = combineReducers({
  playlist: playlistReducer,
  currentSong: currentSongReducer,
  search: searchReducer,
  auth: authReducer,
  confirmation: confirmationReducer,
  form: formReducer,
});

export default rootReducer;
