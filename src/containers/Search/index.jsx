// @flow
import * as React from 'react';
import { SearchStyle, SearchInput } from './style';
import Sound from 'react-sound';
import { MdClear } from 'react-icons/lib/md';
import { Link } from 'react-router-dom';
import { SearchResults, Loader } from 'components';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from "appRedux/actions";
import type { Actions, Song, SoundStatus } from "../../flow/types";

type Props = {
  playlist: Array<Song>,
  currentSong: Song,
  playingStatus: SoundStatus,
  songPosition: number,
  inputValue: string,
  isLoading: boolean,
  results: Array<Song>,
  error: any,
  actions: Actions,
}

type State = {
  position: number,
}

class Search extends React.Component<Props, State> {

  state = {
    position: 0,
  };

  componentWillUnmount() {
    this.findWithDebounce.cancel();
    this.props.actions.clearErrors();
    if (this.props.currentSong) {
      this.props.actions.setSongPosition(this.state.position);
    }
  }

  toggleSong = (songIndex) => {
    const newSong = this.props.results[songIndex];
    if (!this.checkIfSongInPlaylist(newSong.id)) {
      this.props.actions.addSong(newSong)
    } else {
      this.props.actions.deleteSong(newSong.id);
      if (this.props.currentSong.id === newSong.id) {
        const index = this.props.playlist.findIndex((song) => song.id === newSong.id);
        const nextIndex = (this.props.playlist.length <= index + 1) ? 0 : index + 1;
        if (this.props.playlist.length === 1) {
          this.props.actions.setSong(null);
        } else {
          this.props.actions.setSong(this.props.playlist[nextIndex]);
          this.props.actions.setSongPosition(0);
        }
      }
    }
  };

  handlePlaying = (sound) => {
    this.setState({position: sound.position});
  };

  checkIfSongInPlaylist = (songId) => !!this.props.playlist.find((song) => song.id === songId);

  findWithDebounce = debounce(this.props.actions.searchSongsRequest, 500, {'maxWait': 1000});

  handleInput = (e) => {
    this.props.actions.updateInput(e.target.value);
    if (e.target.value) {
      this.findWithDebounce(e.target.value);
    } else {
      this.findWithDebounce.cancel();
      this.props.actions.clearErrors();
    }
  };

  handleOnEndSong = () => {
    const nextSongIndex = this.props.playlist.indexOf(this.props.currentSong) + 1;
    if (nextSongIndex > this.props.playlist.length - 1) {
      this.props.actions.setSong(this.props.playlist[0]);
    } else {
      this.props.actions.setSong(this.props.playlist[nextSongIndex]);
    }
    this.props.actions.setSongPosition(0);
    this.setState({position: 0});
  };

  render() {
    const songPosition = (this.state.position) ? this.state.position : this.props.songPosition;
    const {results, inputValue, isLoading, error, currentSong, playingStatus} = this.props;

    return (
      <SearchStyle>
        {(currentSong)
          ? <Sound
            url={currentSong.preview}
            playStatus={playingStatus}
            position={songPosition}
            onFinishedPlaying={this.handleOnEndSong}
            onPlaying={this.handlePlaying}
            volume={50}
          />
          : null}
        <div className="search-element">
          <SearchInput>
            <input
              value={inputValue}
              className="input"
              placeholder="track name..."
              onChange={this.handleInput}
            />
          </SearchInput>
          <Link to={`/`} className="close-link"><MdClear/></Link>
        </div>
        {!isLoading && error.message
          ? <div className="no-results">
            Error occurred, try again later...
            <br/>
            {(error.message)
              ? <div>
                Error: {JSON.stringify(error.message)}
              </div>
              : null}
          </div>
          : null}
        {
          isLoading ? <Loader/> :
            inputValue &&
            (results.length && !error.message ?
              <SearchResults
                results={results}
                checkIfSongInPlaylist={this.checkIfSongInPlaylist}
                toggleSong={this.toggleSong}
              /> : <div className="no-results">No songs found...</div>)
        }

      </SearchStyle>
    )
  }
}

export default connect(
  ({playlist, currentSong, search}) => ({
    playlist: playlist.songs,
    currentSong: currentSong.song,
    playingStatus: currentSong.status,
    songPosition: currentSong.position,
    inputValue: search.inputValue,
    isLoading: search.isLoading,
    results: search.results,
    error: search.error,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  })
)(Search);