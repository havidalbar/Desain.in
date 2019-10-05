import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PortofolioCard from '../../card/PortofolioCardRekomendasiChose';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayRekomendasiPerson extends Component {
    render() {
        return (
            <div className="display">
                <div class="card-wrapper-rekomendasi-person">
                    <Link to="/profile/7">
                        <PortofolioCard judul="Fishception - Warmup" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-001.jpg" />
                    </Link>
                    <Link to="/profile/3">
                        <PortofolioCard judul="Freeze Fuzz" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-003.jpg" />
                    </Link>
                    <Link to="/profile/8">
                        <PortofolioCard judul="Bat Berry" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-007.jpg" />
                    </Link>
                </div>
                <div class="card-wrapper-rekomendasi-person">
                    <Link to="/profile/2">
                        <PortofolioCard judul="Abstract Illustrations" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-002.jpg" />
                    </Link>
                    <Link to="/profile/6">
                        <PortofolioCard judul="Vectober 04 - Freeze" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-004.jpg" />
                    </Link>
                    <Link to="/profile/1">
                        <PortofolioCard judul="Mr Florist" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-006.jpg" />
                    </Link>
                </div>
                <div class="card-wrapper-rekomendasi-person">
                    <Link to="/profile/1">
                        <PortofolioCard judul="GridFriday Fork" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-008.jpg" />
                    </Link>
                    <Link to="/profile/3">
                        <PortofolioCard judul="Nothing Wuzzy" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-001.jpg" />
                    </Link>
                    <Link to="/profile/5">
                        <PortofolioCard judul="Illustrations This" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-004.jpg" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default DisplayRekomendasiPerson;
