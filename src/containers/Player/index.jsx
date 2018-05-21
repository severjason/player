/* global soundManager:false */
import React from 'react';
import Sound from 'react-sound';
import { PlayerMenu, PlayerControls, PlayerSlider, Playlist } from 'components';
import PlayerStyle from './style';

class Player extends React.Component {

  componentDidMount() {
    soundManager.setup({debugMode: false});
  }

  state = {
    playingStatus: Sound.status.STOPPED,
    currentSong: this.props.playlist[0],
    position: 0,
    playlistOpened: false,
  };

  resetStatus = () => {
    if (this.state.playingStatus === Sound.status.PLAYING) {
      this.setState({playingStatus: Sound.status.PLAYING, position: 0})
    } else {
      this.setState({playingStatus: Sound.status.STOPPED, position: 0})
    }
  };

  handlePlaying = (sound) => {
    this.setState({position: sound.position});
  };

  handlePlayClick = (id) => {
    if (id === this.state.currentSong.id) {
      this.setState({
        playingStatus:
          (this.state.playingStatus === Sound.status.PLAYING)
            ? Sound.status.PAUSED
            : Sound.status.PLAYING
      });
    } else {
      this.setState({position: 0})
    }
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

  togglePlaylist = () => {
    this.setState({playlistOpened: !this.state.playlistOpened})
  };

  setCurrentSong = (songId) => {
    const index = this.props.playlist.findIndex((song) => song.id === songId);
    this.setState({currentSong: this.props.playlist[index]})
  };

  render() {

    const {currentSong, playingStatus, position, playlistOpened} = this.state;

    return (
      <PlayerStyle className={`${this.state.playlistOpened ? 'minimized' : ''} player`}>
        <PlayerMenu
          playlistOpened={playlistOpened}
          togglePlaylist={this.togglePlaylist}
        />
        {(playlistOpened)
          ? <Playlist
            minimized={playlistOpened}
            playlist={this.props.playlist}
            currentSongId={currentSong.id}
            onPlayClick={this.handlePlayClick}
            setSong={this.setCurrentSong}
          />
          : null}
          <PlayerSlider
            minimized={playlistOpened}
            playingStatus={playingStatus}
            song={currentSong}
            songPosition={position}
            songDuration={currentSong.duration}
            onEndSong={this.handleForwardClick}
            onPlaying={this.handlePlaying}
            onSlide={this.handleSlide}
          />
          <PlayerControls
            minimized={playlistOpened}
            playingStatus={playingStatus}
            currentSongId={currentSong.id}
            onPlayClick={this.handlePlayClick}
            onForwardClick={this.handleForwardClick}
            onRewindClick={this.handleRewindClick}
          />
      </PlayerStyle>
    );
  }
}

export default Player;
