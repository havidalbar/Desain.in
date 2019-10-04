import React, { Component } from 'react';
import PortofolioCard from '../../card/PortofolioCardRekomendasiChose';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayRekomendasiPerson extends Component {
    render() {
        return (
            <div className="display">
                <div class="card-wrapper-rekomendasi-person">
                    <PortofolioCard judul="Judul Portfolio" />
                    <PortofolioCard judul="Judul Portfolio" />
                    <PortofolioCard judul="Judul Portfolio" />
                </div>
                <div class="card-wrapper-rekomendasi-person">
                    <PortofolioCard judul="Judul Portfolio" />
                    <PortofolioCard judul="Judul Portfolio" />
                    <PortofolioCard judul="Judul Portfolio" />
                </div>
                <div class="card-wrapper-rekomendasi-person">
                    <PortofolioCard judul="Judul Portfolio" />
                    <PortofolioCard judul="Judul Portfolio" />
                    <PortofolioCard judul="Judul Portfolio" />
                </div>
            </div>
        )
    }
}

export default DisplayRekomendasiPerson;
