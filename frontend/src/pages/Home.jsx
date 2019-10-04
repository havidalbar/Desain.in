import React, { Component } from 'react';
import Footer from '../components/layouts/footer/Footer';
import NavBar from '../components/layouts/navbar/NavBar';
import HomeHero from '../components/layouts/home/HomeHero';
import DisplayPortofoloio from '../components/layouts/home/DisplayPortofolio';
import PromoteBannerService from '../components/layouts/home/PromoteBannerService';
import PromoteBannerContest from '../components/layouts/home/PromoteBannerContest';
import DisplayContest from '../components/layouts/home/DisplayContest';

class Home extends Component {
  render() {
    return (
        <div>

            <NavBar/>
            <HomeHero/>
            <DisplayPortofoloio/>
            <PromoteBannerService/>
            <DisplayContest/>
            <PromoteBannerContest/>
            <Footer/>
            
        </div>
    );
  }
}

export default Home;