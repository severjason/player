import Sound from 'react-sound';

const INITIAL_STATE = {
  song: {},
  status: Sound.status.STOPPED,
  position: 0,
};

export default function currentSongReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
