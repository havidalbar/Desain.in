import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './pages/profile/Profile';
import Kontes from './pages/contest/KontesPenyelenggara';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

<<<<<<< HEAD
ReactDOM.render(<Profile />, document.getElementById('root'));
=======
ReactDOM.render(<Kontes />, document.getElementById('root'));
>>>>>>> 236539fda88471b46fc6953d9cd6c03c20cebe9d

// If you want your app to work offline and load faster, you can change
// unregister() to register() belo1w. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
