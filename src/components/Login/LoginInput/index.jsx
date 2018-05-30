// @flow
import * as React from 'react';
import type { ReduxFormsInput } from 'flow/types';
import LoginInputStyle from './style';
import { MdErrorOutline } from 'react-icons/lib/md';


const LoginInput =
  ({
     input,
     placeholder,
     label,
     type,
     className,
     errorClass,
     labelClass,
     meta: {touched, error}
   }: ReduxFormsInput) => (
      <LoginInputStyle>
        <label className={labelClass}>{label}</label>
        <div>
          <input
            className={className + ' ' + ((touched && error) ? errorClass : '')}
            {...input}
            placeholder={placeholder}
            type={type}
          />
          {touched &&
          ((error && <div className={errorClass}>
            <MdErrorOutline/> {error}
            </div>))}
        </div>
      </LoginInputStyle>
    );

export default LoginInput;
