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
    }
  };


  toggleSong = (songIndex) => {
    const newSong = this.state.results[songIndex];
    console.log(newSong);
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
              this.setState({inputValue: e.target.value, isLoading: !!e.target.value});
            }}
            onKeyUp={() => {
              if (this.state.inputValue) {
                api.findSong(this.state.inputValue)
                  .then(results => results.json())
                  .then(json => {
                    if (json.error) {
                      console.log(json.error)
                    } else {
                      this.setState({
                        isLoading: false,
                        results: json.data
                      });
                    }
                  })
                  .catch((error) => { console.log(error)});
              }
            }}
          />
          <Link to={`/`} className="close-link"><MdClear/></Link>
        </div>
        {this.state.isLoading ? <Loader/> : null}
        {!this.state.isLoading && this.state.results.length > 0
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
