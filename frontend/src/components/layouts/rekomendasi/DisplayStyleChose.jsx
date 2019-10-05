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
                        <PortofolioCard judul="GridFriday Fork" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-001.jpg" />
                    </Link>
                    <Link to="/rekomendasiStylePerson">
                        <PortofolioCard judul="Mr Florist" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-004.jpg" />
                    </Link>
                    <Link to="/rekomendasiStylePerson">
                        <PortofolioCard judul="Fireberry" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-007.jpg" />
                    </Link>
                    <Link to="/rekomendasiStylePerson">
                        <PortofolioCard judul="Abstract Illustrations" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-003.jpg" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default DisplayStyleChose;
