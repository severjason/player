import React from 'react';
import SearchStyle from './style';
import Sound from 'react-sound';
import { MdClear} from 'react-icons/lib/md';
import { Link } from 'react-router-dom';
import { SearchResults, Loader } from 'components';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from "appRedux/actions";

class Search extends React.Component {

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

  showNoResults = () => {
    return !this.props.isLoading && this.props.results.length === 0 && this.props.inputValue && !this.props.error.isError;
  };

  showResults = () => {
    return !this.props.isLoading && this.props.results.length > 0 && !this.props.error.isError && this.props.inputValue;
  };

  checkIfSongInPlaylist = (songId) => !!this.props.playlist.find((song) => song.id === songId);

  findWithDebounce = debounce(this.props.actions.searchSongsRequest, 500, { 'maxWait': 1000 });

  handleInput = (e) => {
    this.props.actions.updateInput(e.target.value);
    if (e.target.value) {
      this.props.actions.searchIsLoading(true);
      this.findWithDebounce(e.target.value);
    } else {
      this.props.actions.searchIsLoading(false);
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
    return (
      <SearchStyle>
        {(this.props.currentSong)
          ? <Sound
            url={this.props.currentSong.preview}
            playStatus={this.props.playingStatus}
            position={songPosition}
            onFinishedPlaying={this.handleOnEndSong}
            onPlaying={this.handlePlaying}
            volume={50}
          />
        : null}
        <div className="search-element">
          <input
            value={this.props.inputValue}
            className="input"
            placeholder="track name..."
            onChange={this.handleInput}
          />
          <Link to={`/`} className="close-link"><MdClear/></Link>
        </div>
        {!this.props.isLoading && this.props.error.isError
          ? <div className="no-results">
            Error occurred, try again later...
            <br/>
            {(this.props.error.data.message)
              ? <div>
                Error: {JSON.stringify(this.props.error.data.message)}
              </div>
              :null}
          </div>
          : null}
        {this.props.isLoading ? <Loader/> : null}
        {this.showNoResults()
          ? <div className="no-results">No songs found...</div>
          : null}
        {this.showResults()
          ? <SearchResults
            results={this.props.results}
            checkIfSongInPlaylist={this.checkIfSongInPlaylist}
            toggleSong={this.toggleSong}
          />
          : null}
      </SearchStyle>
    )
  }
}

export default connect(
  state => ({
    playlist: state.playlist.songs,
    currentSong: state.currentSong.song,
    playingStatus: state.currentSong.status,
    songPosition: state.currentSong.position,
    inputValue: state.search.inputValue,
    isLoading: state.search.isLoading,
    results: state.search.results,
    error: state.search.error,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  })
)(Search);