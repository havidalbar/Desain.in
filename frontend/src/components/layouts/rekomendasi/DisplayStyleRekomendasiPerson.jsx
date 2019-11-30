import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PortofolioCard from '../../card/PortofolioCardRekomendasiChose';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayStyleRekomendasiPerson extends Component {
    render() {
        return (
            <div className="display">
                <div class="card-wrapper-person">
                    <Link to="/rekomendasiPerson">
                        <PortofolioCard judul="Ya" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-019.png" />
                    </Link>
                    <Link to="/rekomendasiPerson">
                        <PortofolioCard judul="Tidak" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-020.png" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default DisplayStyleRekomendasiPerson;
