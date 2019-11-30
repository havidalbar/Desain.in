import React, { Component } from 'react';
import './promoteBanner.scss';
import '../../layouts/typography.scss';
import Deco from '../../../assets/images/penyelenggara.svg';


class PromoteBannerKontesPenyelenggara extends Component {
    render() {
        return (
            <div className="promote-banner-profile">
                <img className="image-bg-kontes-penyelenggara" src={Deco}/>
                <div className="ads-content-penyelenggara">
                    <p className="title-3">
                    Pilih dari ratusan desain terbaik
                    </p>
                </div>
            </div>
        )
    }
}

export default PromoteBannerKontesPenyelenggara;