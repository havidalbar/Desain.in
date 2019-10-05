import React, { Component } from 'react';
import './promoteBanner.scss';
import '../../layouts/typography.scss';
import Deco from '../../../assets/images/Rekomendasi.svg';


class PromoteBannerRekomendasi extends Component {
    render() {
        return (
            <div className="promote-banner">
                <img className="image-bg-rekomendasi" src={Deco} />
                <div className="ads-content">
                    <p className="title-3">
                        Bantu kami dengan
                        memberikan informasi
                        seputar proyek anda
                    </p>
                </div>
            </div>
        )
    }
}

export default PromoteBannerRekomendasi;