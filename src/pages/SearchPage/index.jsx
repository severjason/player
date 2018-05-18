import React from 'react';
import { withPlaylist, Search } from 'containers';

const SP = withPlaylist(Search);

const SearchPage = () => <SP/>;

export default SearchPage;
