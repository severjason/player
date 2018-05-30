// @flow
import * as React from 'react';
import ConfirmationStyle from './style';
import { MdClear, MdCheck } from 'react-icons/lib/md'

type Props = {
  showConfirmation: boolean,
  toggleConfirmation: () => boolean,
  success: () => void,
}

const Confirmation = (props: Props) => (
  <ConfirmationStyle
    className={props.showConfirmation ? 'visible' : ''}
  >
    <div className="item center">
      Logout?
    </div>
    <div className="item">
      <div
        className="button"
        onClick={props.toggleConfirmation}
      >
        <MdClear/>
      </div>
      <div
        className="button"
        onClick={() => {
          props.success();
          props.toggleConfirmation();
        }}>
        <MdCheck/>
      </div>
    </div>

  </ConfirmationStyle>
);


export default Confirmation;
