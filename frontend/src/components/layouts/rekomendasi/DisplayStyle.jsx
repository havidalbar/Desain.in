import React, { Component } from 'react';
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
                    <PortofolioCard judul="Judul Portfolio" />
                    <PortofolioCard judul="Judul Portfolio" />
                    <PortofolioCard judul="Judul Portfolio" />
                    <PortofolioCard judul="Judul Portfolio" />
                </div>
            </div>
        )
    }
}

export default DisplayStyle;
