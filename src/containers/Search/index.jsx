import React from 'react';
import SearchStyle from './style';
import { MdClear} from 'react-icons/lib/md';
import { Link } from 'react-router-dom';
import * as api from 'service/deezerAPI';
import { SearchResults, Loader } from 'components';

class Search extends React.Component {

  state = {
    inputValue: '',
    isLoading: false,
    results: [],
    error: {
      isError: false,
      data: {}
    }
  };

  toggleSong = (songIndex) => {
    const newSong = this.state.results[songIndex];
    (!this.props.checkIfSongInPlaylist(newSong.id)) ? this.props.addSong(newSong) : this.props.removeSong(newSong.id);
  };

  showNoResults = () => {
    return !this.state.isLoading && this.state.results.length === 0 && this.state.inputValue && !this.state.error.isError;
  };

  showResults = () => {
    return !this.state.isLoading && this.state.results.length > 0 && !this.state.error.isError;
  };

  render() {
    return (
      <SearchStyle>
        <div className="search-element">
          <input
            value={this.state.inputValue}
            className="input"
            placeholder="track name..."
            onChange={(e) => {
              this.setState({
                inputValue: e.target.value,
                isLoading: !!e.target.value,
                error: {
                  isError: false,
                  data: {}
                }
              });
            }}
            onKeyUp={() => {
              if (this.state.inputValue) {
                api.findSong(this.state.inputValue)
                  .then(results => results.json())
                  .then(json => {
                    if (json.error) {
                      this.setState({
                        isLoading: false,
                        error: {
                          isError: true,
                          data: json.error,
                        }});
                      console.log(json.error)
                    } else {
                      this.setState({
                        isLoading: false,
                        results: json.data
                      });
                    }
                  })
                  .catch((error) => {
                    this.setState({
                      isLoading: false,
                      error: {
                        isError: true,
                        data: error,
                      }});
                    console.log(error);
                  });
              }
            }}
          />
          <Link to={`/`} className="close-link"><MdClear/></Link>
        </div>
        {!this.state.isLoading && this.state.error.isError
          ? <div className="no-results">Error occurred, try again later...}</div>
          : null}
        {this.state.isLoading ? <Loader/> : null}
        {this.showNoResults()
          ? <div className="no-results">No songs found...</div>
          : null}
        {this.showResults()
          ? <SearchResults
            results={this.state.results}
            checkIfSongInPlaylist={this.props.checkIfSongInPlaylist}
            toggleSong={this.toggleSong}
          />
          : null}
      </SearchStyle>
    )
  }
}

export default Search;
