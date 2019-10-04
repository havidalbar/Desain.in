import React, { Component } from 'react';
import ContestCard from '../../card/ContestCard';
import Button from '../../button/ButtonAntd';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayPortofolio extends Component {
    render() {
        return(
            <div className="display">
                <p className="title-3 title-display">
                    Kontes Kreatif
                </p>
                <div class="card-wrapper">
                    <ContestCard judul="Judul Contest" penyelenggara="PT.Bahu Membahu" price="200.000" date="20 November 2019"/>
                    <ContestCard judul="Judul Contest" penyelenggara="PT.Bahu Membahu" price="200.000" date="20 November 2019"/>
                    <ContestCard judul="Judul Contest" penyelenggara="PT.Bahu Membahu" price="200.000" date="20 November 2019"/>
                </div>
                <div className="btn-wrap">
                    <Button style="button primary" text="LIHAT LEBIH BANYAK"/>
                </div>
            </div>
        )
    }
}

export default DisplayPortofolio;
