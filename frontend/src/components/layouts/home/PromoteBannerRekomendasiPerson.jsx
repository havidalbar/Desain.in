import React, { Component } from 'react';
import './promoteBanner.scss';
import '../../layouts/typography.scss';
import Deco from '../../../assets/images/contest-reg.svg';


class PromoteBannerRekomendasiPerson extends Component {
    render() {
        return(
            <div className="promote-banner-contest">
            <img className="image-bg-person" src={Deco}/>
            <div className="ads-content-contest-2">
                <p className="title-3">
                Pilih gaya desain yang anda inginkan
                </p>
            </div>
        </div>
        )
    }
}

export default PromoteBannerRekomendasiPerson;