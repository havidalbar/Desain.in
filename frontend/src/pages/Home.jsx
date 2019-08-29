import React, { Component } from 'react';
import Footer from '../components/layouts/footer/Footer';
import NavBar from '../components/layouts/navbar/NavBar';

class App extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <Footer/>
        </div>
    );
  }
}

export default App;