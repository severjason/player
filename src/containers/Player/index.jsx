/* global soundManager:false */
import React from 'react';
import Sound from 'react-sound';
import { PlayerMenu, PlayerControls, SongInfo, PlayerSlider } from 'components';
import PlayerStyle from './style';

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

    const {currentSong, playingStatus, position} = this.state;

    return (
      <PlayerStyle>
        <PlayerMenu/>
        <SongInfo
          song={currentSong}
        />
        <PlayerSlider
          playingStatus={playingStatus}
          song={currentSong}
          songPosition={position}
          songDuration={currentSong.duration}
          onEndSong={this.handleForwardClick}
          onPlaying={this.handlePlaying}
          onSlide={this.handleSlide}
        />
        <PlayerControls
          playingStatus={playingStatus}
          onPlayClick={this.handlePlayClick}
          onForwardClick={this.handleForwardClick}
          onRewindClick={this.handleRewindClick}
        />
      </PlayerStyle>
    );
  }
}

export default Player;
