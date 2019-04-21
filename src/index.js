import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Lifecycle from './list/lifecycle';

ReactDOM.render(<Lifecycle />, document.getElementById('root'));

serviceWorker.unregister();
