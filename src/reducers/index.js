import { combineReducers } from 'redux';
import playlistReducer from './playlistReducer';
import currentSongReducer from './currentSongReducer';


const rootReducer = combineReducers({
  playlist: playlistReducer,
  currentSong: currentSongReducer,
});

export default rootReducer;
