import React, { Component } from 'react';
import Navbar from '../../components/layouts/navbar/NavBar';
import Footer from '../../components/layouts/footer/Footer';
import DisplayIdentitas from '../../components/layouts/home/DisplayIdentitas';
import BannerStyle from '../../components/layouts/home/PromoteBannerIdentitas';


class Profile extends Component {
    render() {
        return(
            <div>
            <Navbar/>
            <BannerStyle/>
            <DisplayIdentitas/>
            <Footer/>
            </div>
        );
    }
}

export default Profile;
