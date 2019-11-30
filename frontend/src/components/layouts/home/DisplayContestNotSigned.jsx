import React, { Component } from 'react';

import ContestCard from '../../card/ContestCard';
import Button from '../../button/Button';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayPortofolioNotSigned extends Component {
    render() {
        return (
            <div className="display">
                <p className="title-3 title-display">
                    Kontes Kreatif
                </p>
                <div class="card-wrapper">
                    <ContestCard judul="Fireberry" penyelenggara="PT.Bahu Membahu" price="200.000" date="20 November 2019" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-005.jpg" />
                    <ContestCard judul="Bat Berry" penyelenggara="PT.Bahu Membahu" price="200.000" date="20 November 2019" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-007.jpg" />
                    <ContestCard judul="Abstract Illustrations" penyelenggara="PT.Bahu Membahu" price="200.000" date="20 November 2019" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-001.jpg" />
                </div>
                <div className="btn-wrap">
                    <Button style="button primary" text="LIHAT LEBIH BANYAK" />
                </div>
            </div>
        )
    }
}

export default DisplayPortofolioNotSigned;
