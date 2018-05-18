import React from 'react';
import { Player, withPlaylist } from 'containers';

const HP = withPlaylist(Player);

const HomePage = () => <HP/>;

export default HomePage;
