import React, { Component } from 'react';
import PortofolioCard from '../../card/PortofolioCardRekomendasiChose';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayStyleChose extends Component {
    render() {
        return (
            <div className="display">
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

export default DisplayStyleChose;
