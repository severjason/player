//@ flow
import * as React from 'react';
import { Login } from 'containers';

type Props = {
  hash: string,
}

const LoginPage = (props: Props) => <Login hash={props.hash}/>;

export default LoginPage;
