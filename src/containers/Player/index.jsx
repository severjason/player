/* global soundManager:false */
import * as React from 'react';
import { PlayerMenu, PlayerControls, PlayerSlider, Playlist } from 'components';
import PlayerStyle from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'appRedux/actions';



class Player extends React.Component {

  state = {
    position: this.props.songPosition,
  };

  componentDidMount() {
    soundManager.setup({debugMode: false});
    if (!this.props.currentSong) {
      this.props.actions.setSong(this.props.playlist[0])
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

  setCurrentSong = (songId) => {
    const index = this.props.playlist.findIndex((song) => song.id === songId);
    this.props.actions.setSong(this.props.playlist[index]);
    this.props.actions.setSongPosition(0);
  };

  removeSong = (songId) => {
    this.props.actions.deleteSong(songId);
    const index = this.props.playlist.findIndex((song) => song.id === songId);
    const nextIndex = (this.props.playlist.length <= index + 1) ? 0 : index + 1;
    if (this.props.playlist.length === 1) {
      this.props.actions.setSong(null)
    } else {
      this.setCurrentSong(this.props.playlist[nextIndex].id);
    }
  };

  render() {
    const {position} = this.state;

    const {currentSong, playlistOpened, playingStatus} = this.props;

    return (
      <PlayerStyle className={`${playlistOpened ? 'minimized' : ''} player`}>
        <PlayerMenu
          playlistOpened={playlistOpened}
          togglePlaylist={this.togglePlaylist}
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
  state => ({
    playlist: state.playlist.songs,
    playlistOpened: state.playlist.isOpened,
    currentSong: state.currentSong.song,
    playingStatus: state.currentSong.status,
    songPosition: state.currentSong.position,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  })
)(Player);
