import React, { Component } from 'react';
import Navbar from '../../components/layouts/navbar/NavBar';
import Footer from '../../components/layouts/footer/Footer';
import DisplayIdentitas from '../../components/layouts/home/DisplayKontesPenyelenggara';
import BannerStyle from '../../components/layouts/home/PromoteKontesPenyelenggara';


class KontesPenyelenggara extends Component {
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

export default KontesPenyelenggara;
