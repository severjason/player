import { combineReducers } from 'redux';
import playlistReducer from './playlistReducer';
import currentSongReducer from './currentSongReducer';
import searchReducer from "./searchReducer";
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  playlist: playlistReducer,
  currentSong: currentSongReducer,
  search: searchReducer,
  from: formReducer,
});

export default rootReducer;
