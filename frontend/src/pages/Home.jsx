import React, { Component } from 'react';
import Footer from '../components/layouts/footer/Footer';
import NavBar from '../components/layouts/navbar/NavBar';
import HomeHero from '../components/layouts/home/HomeHero';
import DisplayPortofoloio from '../components/layouts/home/DisplayPortofolio';

class Home extends Component {
  render() {
    return (
        <div>

            <NavBar/>
            <HomeHero/>
            <DisplayPortofoloio/>
            <Footer/>
            
        </div>
    );
  }
}

export default Home;