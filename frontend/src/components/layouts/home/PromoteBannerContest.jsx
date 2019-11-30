import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../button/Button';
import Deco from '../../../assets/images/ads-banner-2.svg';
import './promoteBanner.scss';
import '../../layouts/typography.scss';

class PromoteBannerContest extends Component {
    render() {
        return (
            <div className="promote-banner-contest">
                <img className="image-bg" src={Deco} />
                <div className="ads-content-contest">
                    <p className="title-3">
                        Susah kan nyari jarum,
        di tumpukan jerami? Kontesin aja
                </p>
                    <div className="wrapper-contest">
                        <p className="bigger-body-text">
                            Buat kontes, dan pilih dari ratusan desain dari komunitas kami
                            untuk project kreatifmu yang lebih mudah.
                    </p>
                    </div>
                    <Link to="/rekomendasi">
                        <Button style="button primary" text="CARI REKOMENDASI" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default PromoteBannerContest;