// @flow
import * as React from 'react';
import { MdCheck } from 'react-icons/lib/md';
import { Redirect } from 'react-router-dom';
import { LoginStyle } from './style';
import { reduxForm, Field } from 'redux-form';
import type { FormProps } from 'redux-form';
import { LoginInput } from 'components/Login';
import type { Actions } from "flow/types";
import * as actions from "appRedux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

type validatedValues = {
  username: string;
  password: string;
}

type validatedErrors = {
  username: string;
  password: string;
}

export const validateLoginInput = (values: validatedValues): validatedErrors => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors;
};

type Props = {
  ...FormProps,
  actions: Actions,
}


class LoginForm extends React.Component<Props> {

  render() {
    const {userLoggedIn, actions, invalid, pristine, submitting, handleSubmit}: Props = this.props;

    return !userLoggedIn ? (
      <LoginStyle>
        <div className="login-item">
          <form
            name="login"
            className="login-form"
            onSubmit={handleSubmit(data => {
              actions.userLogin(data.username);
            })}
          >
            <div className="login-title">
              Login form
            </div>
            <Field
              name="username"
              component={LoginInput}
              className="input"
              errorClass="input-error"
              labelClass="input-label"
              type="text"
              label="Login"
            />
            <Field
              name="password"
              component={LoginInput}
              className="input"
              errorClass="input-error"
              labelClass="input-label"
              type="password"
              label="Password"/>
            <button
              disabled={invalid || pristine || submitting}
              type="submit"
              className="login-button"
            >
              <MdCheck/>
            </button>
          </form>
        </div>
      </LoginStyle>
    ) : <Redirect to='/player' />
  }
}

const Login = reduxForm({
  form: 'login',
  validate: validateLoginInput,
})(LoginForm);

export default connect(
  ({auth}) => ({
    userLoggedIn: auth.userLoggedIn,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  })
)(Login);
