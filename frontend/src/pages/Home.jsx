import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';

class App extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <Footer/>
            </div>
    );
  }
}

export default App;