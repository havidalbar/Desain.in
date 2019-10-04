import React, { Component } from 'react';
import Navbar from '../../components/layouts/navbar/NavBar';
import Footer from '../../components/layouts/footer/Footer';
import DisplayIdentitas from '../../components/layouts/home/DisplayIdentitasNonDesainer';
import BannerStyle from '../../components/layouts/home/PromoteBannerIdentitasNonDesainer';


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
