import React, { Component } from 'react';
import Navbar from '../../components/layouts/navbar/NavBar';
import Footer from '../../components/layouts/footer/Footer';
import DisplayStyle from '../../components/layouts/home/DisplayContestNotSigned';
import BannerStyle from '../../components/layouts/home/PromoteBannerContestNotSigned';



class KontesNotSigned extends Component {
    render() {
        return(
            <div>
            <Navbar/>
            <BannerStyle/>
            <DisplayStyle/>
            <Footer/>
            </div>
        );
    }
}

export default KontesNotSigned;
