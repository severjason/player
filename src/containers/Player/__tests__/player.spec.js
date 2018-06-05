// @flow
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// test file
import { shallow } from 'enzyme';
import React from 'react';
import { Player } from 'containers';
import { Provider } from 'react-redux';
import { store, persistor } from 'appRedux/store';
import renderer from 'react-test-renderer';
import { PersistGate } from 'redux-persist/integration/react';

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

test ('renders correctly', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Player/>
      </PersistGate>
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
