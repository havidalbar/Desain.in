import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PortofolioCard from '../../card/PortofolioCardRekomendasiChose';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayStyle extends Component {
    render() {
        return (
            <div className="display">
                <p className="title-3 title-display">
                    Pilih lingkup pekerjaan kreatif anda
                </p>
                <div class="card-wrapper">
                    <Link to="/rekomendasiStyle">
                        <PortofolioCard judul="Illustrasi" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-011.jpg" />
                    </Link>
                    <Link to="/rekomendasiStyle">
                        <PortofolioCard judul="Branding" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-012.jpg" />
                    </Link>
                    <Link to="/rekomendasiStyle">
                        <PortofolioCard judul="Stationary Design" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-013.png" />
                    </Link>
                    <Link to="/rekomendasiStyle">
                        <PortofolioCard judul="Advertaising" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-014.png" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default DisplayStyle;
