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
                        <PortofolioCard nama="Muhamad Wildan Aldiansyah" judul="Fishception - Warmup" harga="IDR. 250.000"  imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-022.jpg" />
                    </Link>
                    <Link to="/profile/3">
                        <PortofolioCard nama="Gilang Nur A'idi" judul="Freeze Fuzz" harga="IDR. 260.000" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-023.png" />
                    </Link>
                    <Link to="/profile/8">
                        <PortofolioCard nama="M Havid Albar P" judul="Bat Berry" harga="IDR. 255.000" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-027.png" />
                    </Link>
                </div>
                <div class="card-wrapper-rekomendasi-person">
                    <Link to="/profile/2">
                        <PortofolioCard nama="Adam Sulthoni" judul="Abstract Illustrations" harga="IDR. 266.000" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-028.png" />
                    </Link>
                    <Link to="/profile/6">
                        <PortofolioCard nama="Muhamad Wildan Aldiansyah" judul="Vectober 04 - Freeze" harga="IDR. 268.000" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-029.png" />
                    </Link>
                    <Link to="/profile/1">
                        <PortofolioCard nama="M Havid Albar P" judul="Mr Florist" harga="IDR. 270.000" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-030.jpg" />
                    </Link>
                </div>
                <div class="card-wrapper-rekomendasi-person">
                    <Link to="/profile/1">
                        <PortofolioCard nama="Gilang Nur A'idi" judul="GridFriday Fork" harga="IDR. 272.000" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-033.jpg" />
                    </Link>
                    <Link to="/profile/3">
                        <PortofolioCard nama="Adam Sulthoni" judul="Nothing Wuzzy" harga="IDR. 278.000" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-032.png" />
                    </Link>
                    <Link to="/profile/5">
                        <PortofolioCard nama="Muhamad Wildan Aldiansyah" judul="Illustrations This" harga="IDR. 290.000" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-031.jpg" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default DisplayRekomendasiPerson;
