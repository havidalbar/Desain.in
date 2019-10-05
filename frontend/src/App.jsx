import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layouts/navbar/NavBar';

import LoginPage from './pages/auth/Login';
import RegisterPage from './pages/auth/Register';
import HomePage from './pages/Home';

import ChatPage from './pages/chat/ChatPage';

import CreateContestPage from './pages/contest/CreateContest';
import Contest from './pages/contest/KontesPenyelenggara';
import KontesNotSigned from './pages/contest/KontesNotSigned';

import Rekomendasi from './pages/rekomendasi/rekomendasi';
import RekomendasiPerson from './pages/rekomendasi/rekomendasiPerson';
import RekomendasiStyleChose from './pages/rekomendasi/rekomendasiStyleChose';
import RekomendasiStylePerson from './pages/rekomendasi/rekomendasiStylePerson';

import UploadPortof from './pages/profile/UploadPortofolio';
import UpdateProfile from './pages/profile/UpdateProfile';
import ProfilePage from './pages/profile/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: true
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/chat" component={ChatPage} />

          <Route path="/rekomendasi" component={Rekomendasi} />
          <Route path="/rekomendasiStyle" component={RekomendasiStyleChose} />
          <Route path="/rekomendasiStylePerson" component={RekomendasiStylePerson} />
          <Route path="/rekomendasiPerson" component={RekomendasiPerson} />

          <Route path="/contest" component={Contest} />
          <Route path="/join-contest" component={KontesNotSigned} />
          <Route path="/create-contest" component={CreateContestPage} />

          <Route path="/profile" component={ProfilePage} />
          <Route path="/profile/:numb" component={ProfilePage} />
          <Route path="/upload-portof" component={UploadPortof} />
          <Route path="/update-profile" component={UpdateProfile} />
        </Switch>
      </Router>
    )
  }
}

export default App;