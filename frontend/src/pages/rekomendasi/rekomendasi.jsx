import React, { Component } from 'react';
import Navbar from '../../components/layouts/navbar/NavBar';
import Footer from '../../components/layouts/footer/Footer';
import DisplayStyle from '../../components/layouts/rekomendasi/DisplayStyle';
import BannerStyle from '../../components/layouts/rekomendasi/PromoteBannerRekomendasi';



class rekomendasi extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <BannerStyle />
                <DisplayStyle />
                <Footer />
            </div>
        );
    }
}

export default rekomendasi;
