import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PortofolioCard from '../../card/PortofolioCardRekomendasiChose';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayStyleChose extends Component {
    render() {
        return (
            <div className="display">
                <div class="card-wrapper">
                    <Link to="/rekomendasiStylePerson">
                        <PortofolioCard judul="Flat Design" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-015.jpg" />
                    </Link>
                    <Link to="/rekomendasiStylePerson">
                        <PortofolioCard judul="Vintage" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-016.jpg" />
                    </Link>
                    <Link to="/rekomendasiStylePerson">
                        <PortofolioCard judul="Water Color" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-017.jpg" />
                    </Link>
                    <Link to="/rekomendasiStylePerson">
                        <PortofolioCard judul="Minimalis" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-018.png" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default DisplayStyleChose;
