import { combineReducers } from 'redux';
import playlistReducer from './playlistReducer';
import currentSongReducer from './currentSongReducer';
import searchReducer from "./searchReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  playlist: playlistReducer,
  currentSong: currentSongReducer,
  search: searchReducer,
  auth: authReducer,
  form: formReducer,
});

export default rootReducer;
