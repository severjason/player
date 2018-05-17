/* global soundManager:false */
import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import Sound from 'react-sound';
import { PlayerMenu, PlayerControls, SongInfo, PlayerSlider } from '../../components';

const PlayerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 100%;
`;

class Player extends React.Component {

  componentDidMount () {
    soundManager.setup({debugMode: false});
  }

  state = {
    playingStatus: Sound.status.STOPPED,
    currentSong: this.props.playlist[0],
    position: 0,
  };

  resetStatus = () => {
    if (this.state.playingStatus === Sound.status.PLAYING) {
      this.setState({playingStatus: Sound.status.PLAYING, position: 0})
    } else {
      this.setState({playingStatus: Sound.status.STOPPED, position: 0})
    }
  };

  getPercentPlayed = () => {
    const total = this.state.currentSong.duration * 1000;
    const current = this.state.position;
    return (!total || !current) ? 0 : current / total;
  };

  handlePlaying = (sound) => {
    this.setState({position: sound.position});
  };

  handlePlayClick = () => {
    this.setState({
      playingStatus:
        (this.state.playingStatus === Sound.status.PLAYING)
          ? Sound.status.PAUSED
          : Sound.status.PLAYING});
  };

  handleSlide = (value) => {
    this.setState({position: value * this.state.currentSong.duration * 1000});
  };

  handleForwardClick = () => {
    const nextSongIndex = this.props.playlist.indexOf(this.state.currentSong) + 1;
    if (nextSongIndex > this.props.playlist.length - 1) {
      this.setState({currentSong: this.props.playlist[0]});
    } else {
      this.setState({currentSong: this.props.playlist[nextSongIndex]});
    }
    this.resetStatus();
  };

  handleRewindClick = () => {
    const previousSongIndex = this.props.playlist.indexOf(this.state.currentSong) - 1;
    if (previousSongIndex < 0) {
      this.setState({currentSong: this.props.playlist[this.props.playlist.length - 1]});
    } else {
      this.setState({currentSong: this.props.playlist[previousSongIndex]});
    }
    this.resetStatus();
  };

  render() {
    return (
      <PlayerStyle>
        <PlayerMenu/>
        <SongInfo
          song={this.state.currentSong}
        />
        <PlayerSlider
          playingStatus={this.state.playingStatus}
          song={this.state.currentSong}
          songPosition={this.state.position}
          onEndSong={this.handleForwardClick}
          onPlaying={this.handlePlaying}
          getPercentPlayed={this.getPercentPlayed}
          onSlide={this.handleSlide}
        />
        <PlayerControls
          playingStatus={this.state.playingStatus}
          onPlayClick={this.handlePlayClick}
          onForwardClick={this.handleForwardClick}
          onRewindClick={this.handleRewindClick}
        />
      </PlayerStyle>
    );
  }
}

PlayerControls.propTypes = {
  playingStatus: PropTypes.string,
  onPlayClick: PropTypes.func,
  onForwardClick: PropTypes.func,
  onRewindClick: PropTypes.func,
};

SongInfo.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.number,
    src: PropTypes.string,
    artist: PropTypes.string,
    album_cover: PropTypes.string,
  })
};

PlayerSlider.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.number,
    src: PropTypes.string,
    artist: PropTypes.string,
    album_cover: PropTypes.string,
  }),
  playingStatus: PropTypes.string,
  songPosition: PropTypes.number,
  onEndSong: PropTypes.func,
  onPlaying: PropTypes.func,
  getPercentPlayed: PropTypes.func,
  onSlide: PropTypes.func,
};

export default Player;
