import React, { Component } from 'react';
import PropTypes from "prop-types";

export default function withPlaylist (Component) {
  return class extends React.Component {
    state = {
      playlist: [
        {
          id: "136332802",
          title: "Moth Into Flame",
          duration: 30.7,
          src: "https://cdns-preview-3.dzcdn.net/stream/c-37617212312b608120b650bdefd2441a-4.mp3",
          artist: "Metallica",
          album_cover: "https://e-cdns-images.dzcdn.net/images/cover/22df6212ca5a43b3ec83caa814e8da16/500x500-000000-80-0-0.jpg",
          album_title: "Hardwired…To Self-Destruct (Deluxe)"
        },
        {
          id: "57866851",
          title: "Already",
          duration: 30.7,
          src: "https://cdns-preview-2.dzcdn.net/stream/c-2cbd99077d028e6f4eed2c00ba47943d-8.mp3",
          artist: "DMX",
          album_cover: "https://e-cdns-images.dzcdn.net/images/cover/13da2f03dfad7905ae3f78738861e9c2/500x500-000000-80-0-0.jpg",
          album_title: "Undisputed",
        },
        {
          id: "422496562",
          title: "I See You",
          duration: 30.7,
          src: "https://cdns-preview-9.dzcdn.net/stream/c-95a21e76fa3387433edb4090f9b9d04b-4.mp3",
          artist: "Kygo",
          album_cover: "https://e-cdns-images.dzcdn.net/images/cover/a58a98cbf62441e85f48ed95d41689fe/500x500-000000-80-0-0.jpg",
          album_title: "Kids in Love",
        }
      ]
    };

    render() {
      return <Component {...this.props} playlist={this.state.playlist}/>;
    }
  };
}

withPlaylist.propTypes = {
  playlist: PropTypes.arrayOf({
    id: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.number,
    src: PropTypes.string,
    artist: PropTypes.string,
    album_cover: PropTypes.string,
    album_title: PropTypes.string,
  }),
};
