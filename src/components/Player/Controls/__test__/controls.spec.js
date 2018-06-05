// @flow
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// test file
import { shallow } from 'enzyme';

import React from 'react';
import PlayerControls from '../index';

type Props = {
  playingStatus: string,
  currentSongId: number,
  minimized: boolean,
  onPlayClick: (id: number) => void,
  onForwardClick: () => void,
  onRewindClick: () => void,
};

const props: Props = {
  playingStatus: 'STOPPED',
  currentSongId: 1,
  minimized: false,
  onPlayClick: jest.fn(),
  onForwardClick: jest.fn(),
  onRewindClick: jest.fn(),
};

test ('renders correctly', () => {
  const wrapper = shallow(
    <PlayerControls {...props} />
  );
  expect(wrapper).toMatchSnapshot();
});
