import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import NameList from './list/nameList';

ReactDOM.render(<NameList />, document.getElementById('root'));

serviceWorker.unregister();
