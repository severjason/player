// @flow
import * as React from 'react';
import { MdCheck } from 'react-icons/lib/md';
import { Redirect } from 'react-router-dom';
import { LoginStyle } from './style';
import { reduxForm, Field } from 'redux-form';
import type { FormProps } from 'redux-form';
import { LoginInput } from 'components/Login';
import { Loader } from 'components';
import type { Actions } from "flow/types";
import * as actions from "appRedux/actions";
import { getToken } from "helpers";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as api from 'service/deezerAPI';
import * as deezerLogo from 'img/deezer.png';
import { compose, lifecycle, branch, renderComponent } from 'recompose';


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
  hash: string,
  actions: Actions,
}

const Login = (props: Props) => {

    const {
      userLoggedIn,
      actions,
      invalid,
      pristine,
      submitting,
      handleSubmit
    }: Props = props;

    return (!userLoggedIn && !getToken(props.hash))
        ? (
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
              <div
                onClick={api.auth}
                className="deezer-login"
              >
                <img
                  src={deezerLogo}
                  alt="login with deezer"
                  title="login with deezer"
                />
              </div>
            </div>
          </LoginStyle>
        )
        : <Redirect to='/player'/>;
};

const enhance = compose(
  connect(
    ({auth}) => ({
      userLoggedIn: auth.userLoggedIn,
    }),
    dispatch => ({
      actions: bindActionCreators(actions, dispatch),
    })
  ),
  reduxForm({
    form: 'login',
    validate: validateLoginInput,
  }),
  lifecycle({
    componentDidMount() {
      if (getToken(this.props.hash)) {
        this.props.actions.userLoginFromDeezer(getToken(this.props.hash));
      }
    }
  }),
  branch(
    props => !props.userLoggedIn && getToken(props.hash),
    renderComponent(Loader)
  )
);


export default enhance(Login);

