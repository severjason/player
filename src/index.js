import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Player } from './containers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Player />, document.getElementById('root'));
registerServiceWorker();
