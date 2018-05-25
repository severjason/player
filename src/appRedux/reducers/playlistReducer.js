// @flow
import {
  ADD_SONG,
  DELETE_SONG,
  TOGGLE_PLAYLIST,
} from "appRedux/actions/types";
import type { Action, Song } from "flow/types";

type State = {
  +isOpened: boolean,
  +songs: Array<Song>
}

const INITIAL_STATE = {
  isOpened: false,
  songs: [
    {
      id: 136332802,
      title: "Moth Into Flame",
      duration: 30.7,
      preview: "https://cdns-preview-3.dzcdn.net/stream/c-37617212312b608120b650bdefd2441a-4.mp3",
      artist: {
        name: "Metallica",
      },
      album: {
        title: "Hardwired…To Self-Destruct (Deluxe)",
        cover_big: "https://e-cdns-images.dzcdn.net/images/cover/22df6212ca5a43b3ec83caa814e8da16/500x500-000000-80-0-0.jpg",
      }
    },
    {
      id: 57866851,
      title: "Already",
      duration: 30.7,
      preview: "https://cdns-preview-2.dzcdn.net/stream/c-2cbd99077d028e6f4eed2c00ba47943d-8.mp3",
      artist: {
        name: "DMX",
      },
      album: {
        title: "Undisputed",
        cover_big: "https://e-cdns-images.dzcdn.net/images/cover/13da2f03dfad7905ae3f78738861e9c2/500x500-000000-80-0-0.jpg",
      },
    },
    {
      id: 422496562,
      title: "I See You",
      duration: 30.7,
      preview: "https://cdns-preview-9.dzcdn.net/stream/c-95a21e76fa3387433edb4090f9b9d04b-4.mp3",
      artist: {
        name: "Kygo",
      },
      album: {
        title: "Kids in Love",
        cover_big: "https://e-cdns-images.dzcdn.net/images/cover/a58a98cbf62441e85f48ed95d41689fe/500x500-000000-80-0-0.jpg",
      },
    }
  ]
};

export default function playlistReducer(state: State = INITIAL_STATE, action: Action ) {
  switch (action.type) {
    case TOGGLE_PLAYLIST: {
      return {
        ...state,
        isOpened: !state.isOpened,
      }
    }
    case DELETE_SONG: {
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== action.payload.songId),
      }
    }
    case ADD_SONG: {
      const {id, title, preview,  artist, album}: Song = action.payload.song;
      return {
        ...state,
        songs: [
          ...state.songs,
          {
            id,
            title,
            duration: 30.7,
            preview,
            artist: {
              name: artist.name,
            },
            album: {
              title: album.title,
              cover_big: album.cover_big,
            }
          }
        ]
      }
    }
    default: {
      return state;
    }
  }
}
