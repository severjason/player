// @flow
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// test file
import { shallow } from 'enzyme';

import React from 'react';
import PlayerMenu from '../index';

type Props = {
  playlistOpened: boolean,
  userLoggedIn: boolean,
  username: string,
  showConfirmation: boolean,
  toggleConfirmation: () => boolean,
  togglePlaylist: () => void,
  logout: () => void,
};

const props: Props = {
  playlistOpened: false,
  userLoggedIn: false,
  username: 'username',
  showConfirmation: false,
  toggleConfirmation: jest.fn(),
  togglePlaylist: jest.fn(),
  logout: jest.fn(),
};

test ('renders correctly', () => {
  const wrapper = shallow(
    <PlayerMenu {...props} />
  );
  expect(wrapper).toMatchSnapshot();
});
