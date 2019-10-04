import React, { Component } from 'react';
import PortofolioCard from '../../card/PortofolioCardRekomendasiChose';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayStyleRekomendasiPerson extends Component {
    render() {
        return (
            <div className="display">
                <div class="card-wrapper-person">
                    <PortofolioCard judul="Judul Portfolio" />
                    <PortofolioCard judul="Judul Portfolio" />
                    <PortofolioCard judul="Judul Portfolio" />
                    <PortofolioCard judul="Judul Portfolio" />
                </div>
            </div>
        )
    }
}

export default DisplayStyleRekomendasiPerson;
