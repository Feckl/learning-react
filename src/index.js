import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import List from './nameList/list'

ReactDOM.render(<List />, document.getElementById('root'));

serviceWorker.unregister();
