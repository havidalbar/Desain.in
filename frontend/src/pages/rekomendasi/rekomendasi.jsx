import React, { Component } from 'react';
import Navbar from '../../components/layouts/navbar/NavBar';
import Footer from '../../components/layouts/footer/Footer';
import DisplayStyle from '../../components/layouts/home/DisplayStyle';
import BannerStyle from '../../components/layouts/home/PromoteBannerRekomendasi';



class rekomendasi extends Component {
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

export default rekomendasi;
