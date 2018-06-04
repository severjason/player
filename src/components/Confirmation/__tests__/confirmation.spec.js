// @flow
import React from 'react';
import Confirmation from '../index';
import renderer from 'react-test-renderer';

type Props = {
  showConfirmation: boolean,
  toggleConfirmation: () => boolean,
  confirmed: () => void,
}

const props: Props = {
  showConfirmation: false,
  toggleConfirmation: () => false,
  confirmed: () => {},
};

it ('renders Confirmation component correctly', () => {
  const tree  = renderer.create(
    <Confirmation
      showConfirmation={props.showConfirmation}
      toggleConfirmation={props.toggleConfirmation}
      confirmed={props.confirmed}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
