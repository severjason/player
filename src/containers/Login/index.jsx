// @flow
import * as React from 'react';
import { MdClear, MdCheck } from 'react-icons/lib/md';
import { Link } from 'react-router-dom';
import { LoginInput, LoginStyle } from './style';
import { reduxForm, Field } from 'redux-form'

class Login extends React.Component<{}> {


  render() {
    const { pristine, submitting } = this.props;
    return (
      <LoginStyle>
        <div className="login-item">
          <Link to={`/`} className="close-link"><MdClear/></Link>
        </div>
        <div className="login-item">
          <form
            name="login"
            className="login-form"
            onSubmit={(e) => {
              // e.preventDefault();
            }}
          >
            <div className="login-title">
              Login form
            </div>
            <LoginInput>
              <Field
                name="username"
                component="input"
                type="text"
                className="input"
                />
            </LoginInput>
            <LoginInput>
              <input
                className="input"
                type="password"
                placeholder="password"/>
            </LoginInput>
            <button
              disabled={pristine || submitting}
              type="submit"
              className="login-button"
            >
              <MdCheck/>
            </button>
          </form>
        </div>
      </LoginStyle>
    )
  }
}

Login = reduxForm({
  form: 'login',
})(Login);

export default Login;