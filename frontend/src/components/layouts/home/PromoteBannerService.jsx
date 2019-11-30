import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../button/Button';
import '../../layouts/typography.scss';
import './promoteBanner.scss';
import Deco from '../../../assets/images/ads-banner.svg';

class PromoteBanner extends Component {
    render() {
        return (
            <div className="promote-banner">
                <img className="image-bg-servis" src={Deco} />
                <div className="ads-content">
                    <p className="title-3">
                        Bingung dengan proyek
                        kreatifmu
                    </p>
                    <div className="wrapper">
                        <p className="bigger-body-text">
                            Temukan lebih dari 100.000+ desainer
                            terbaik untuk proyek kreatifmu
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

export default PromoteBanner;