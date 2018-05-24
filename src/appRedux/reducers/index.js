import { combineReducers } from 'redux';
import playlistReducer from './playlistReducer';
import currentSongReducer from './currentSongReducer';
import searchReducer from "./searchReducer";


const rootReducer = combineReducers({
  playlist: playlistReducer,
  currentSong: currentSongReducer,
  search: searchReducer,
});

export default rootReducer;
