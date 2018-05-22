import React from 'react';
import { LoaderStyle } from 'styles/templates';

const Loader = () => (
  <LoaderStyle>
    <div className="lds-css ng-scope">
      <div className="lds-rolling">
        <div/>
      </div>
    </div>
  </LoaderStyle>
);

export default Loader;
