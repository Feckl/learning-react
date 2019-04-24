import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
// import List from './view/nameList/list'
import NameList from './view/list/nameList'

ReactDOM.render(<NameList />, document.getElementById('root'));

serviceWorker.unregister();
