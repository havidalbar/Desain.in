import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreateContest from './pages/contest/CreateContest';
import Login from './pages/auth/Login';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CreateContest />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
