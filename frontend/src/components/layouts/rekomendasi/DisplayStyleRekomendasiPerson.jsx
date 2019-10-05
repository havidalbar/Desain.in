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
                        <PortofolioCard judul="Bat Berry" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-001.jpg" />
                    </Link>
                    <Link to="/rekomendasiPerson">
                        <PortofolioCard judul="Vectober 04 - Freeze" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-003.jpg" />
                    </Link>
                    <Link to="/rekomendasiPerson">
                        <PortofolioCard judul="Mr Florist" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-002.jpg" />
                    </Link>
                    <Link to="/rekomendasiPerson">
                        <PortofolioCard judul="GridFriday Fork" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-007.jpg" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default DisplayStyleRekomendasiPerson;
