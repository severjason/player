/* global soundManager:false */
// @flow
import * as React from 'react';
import { PlayerMenu, PlayerControls, PlayerSlider, Playlist } from 'components';
import PlayerStyle from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Song, Actions } from 'flow/types';
import * as actions from 'appRedux/actions';
import { auth } from 'app_firebase/auth';

type Props = {
  playlist: Array<Song>,
  playlistOpened: boolean,
  currentSong: Song,
  playingStatus: string,
  userLoggedIn: boolean,
  username: string,
  token: string,
  songPosition: number,
  actions: Actions,
}

type State = {
  position: number,
  showConfirmation: boolean,
}

class Player extends React.Component<Props, State> {

  state = {
    position: this.props.songPosition,
    showConfirmation: false,
  };

  componentDidMount() {
    // $FlowFixMe
    soundManager.setup({debugMode: false});
    if (!this.props.currentSong) {
      this.props.actions.setSong(this.props.playlist[0]);
    }
  }

  componentWillUnmount() {
    if (this.props.currentSong) {
      this.props.actions.setSongPosition(this.state.position);
    }
  }

  resetStatus = () => {
    this.props.actions.resetStatus(this.props.playingStatus);
    this.setState({position: 0});
  };

  handlePlaying = (sound) => {
    this.setState({position: sound.position});
  };

  handlePlayClick = (id) => {
    if (id === this.props.currentSong.id) {
      this.props.actions.startPlaying(this.props.playingStatus);
    } else {
      this.setState({position: 0});
    }
  };

  handleSlide = (value) => {
    this.setState({position: value * this.props.currentSong.duration * 1000});
  };

  handleForwardClick = () => {
    const nextSongIndex = this.props.playlist.indexOf(this.props.currentSong) + 1;
    if (nextSongIndex > this.props.playlist.length - 1) {
      this.props.actions.setSong(this.props.playlist[0]);
    } else {
      this.props.actions.setSong(this.props.playlist[nextSongIndex]);
    }
    this.resetStatus();
  };

  handleRewindClick = () => {
    const previousSongIndex = this.props.playlist.indexOf(this.props.currentSong) - 1;
    if (previousSongIndex < 0) {
      this.props.actions.setSong(this.props.playlist[this.props.playlist.length - 1]);
    } else {
      this.props.actions.setSong(this.props.playlist[previousSongIndex]);
    }
    this.resetStatus();
  };

  togglePlaylist = () => {
    this.props.actions.togglePlaylist();
  };

  toggleConfirmation = () => {
    this.setState({showConfirmation: !this.state.showConfirmation})
  };

  setCurrentSong = (songId) => {
    const index = this.props.playlist.findIndex((song) => song.id === songId);
    this.props.actions.setSongPosition(0);
    this.setState({position: 0});
    this.props.actions.setSong(this.props.playlist[index]);
  };

  removeSong = (songId) => {
    this.props.actions.deleteSong(songId);
    const index = this.props.playlist.findIndex((song) => song.id === songId);
    const nextIndex = (this.props.playlist.length <= index + 1) ? 0 : index + 1;
    if (this.props.playlist.length === 1) {
      this.props.actions.setSong(null)
    } else {
      if (songId === this.props.currentSong.id) {
        this.setCurrentSong(this.props.playlist[nextIndex].id);
      }
    }
  };

  handleLogout = () => {
    this.props.token ? this.props.actions.userLogoutFromDeezer() : auth.signOut().then(() => this.props.actions.userLogout());
  };

  render() {
    const {position, showConfirmation} = this.state;

    const {
      currentSong,
      playlistOpened,
      playingStatus,
      userLoggedIn,
      username} = this.props;

    return (
      <PlayerStyle className={`${playlistOpened ? 'minimized' : ''} player`}>
        <PlayerMenu
          playlistOpened={playlistOpened}
          togglePlaylist={this.togglePlaylist}
          userLoggedIn={userLoggedIn}
          username={username}
          showConfirmation={showConfirmation}
          logout={this.handleLogout}
          toggleConfirmation={this.toggleConfirmation}
        />
        {(playlistOpened && currentSong)
          ? <Playlist
            minimized={playlistOpened}
            playlist={this.props.playlist}
            currentSongId={currentSong.id}
            onPlayClick={this.handlePlayClick}
            setSong={this.setCurrentSong}
            removeSong={this.removeSong}
          />
          : null}
        {(playlistOpened && !currentSong) ? <div className="info">Playlist is empty</div> : null}
        {(currentSong)
          ? <PlayerSlider
            minimized={playlistOpened}
            playingStatus={playingStatus}
            song={currentSong}
            songPosition={position}
            songDuration={currentSong.duration}
            onEndSong={this.handleForwardClick}
            onPlaying={this.handlePlaying}
            onSlide={this.handleSlide}
          />
          : null
        }
        {(currentSong)
          ? <PlayerControls
            minimized={playlistOpened}
            playingStatus={playingStatus}
            currentSongId={currentSong.id}
            onPlayClick={this.handlePlayClick}
            onForwardClick={this.handleForwardClick}
            onRewindClick={this.handleRewindClick}
          />
          : null}
      </PlayerStyle>
    );
  }
}

export default connect(
  ({playlist, currentSong, auth}) => ({
    playlist: playlist.songs,
    playlistOpened: playlist.isOpened,
    currentSong: currentSong.song,
    playingStatus: currentSong.status,
    songPosition: currentSong.position,
    userLoggedIn: auth.userLoggedIn,
    username: auth.username,
    token: auth.token,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  })
)(Player);
