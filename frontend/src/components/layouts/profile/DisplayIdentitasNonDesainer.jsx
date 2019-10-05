import React, { Component } from 'react';
import PortofolioCard from '../../card/PortfolioCard';
import Button from '../../button/ButtonAntd';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayIdentitasNonDesainer extends Component {
    render() {
        return (
            <div className="display">
                <p className="title-3 title-display">
                    Portofolio Tony
                </p>
                <div class="card-wrapper">
                    <PortofolioCard judul="Judul Portfolio" userName="Gilang Nur A'idi" likeCount="200" viewCount="200" />
                    <PortofolioCard judul="Judul Portfolio" userName="Gilang Nur A'idi" likeCount="200" viewCount="200" />
                    <PortofolioCard judul="Judul Portfolio" userName="Gilang Nur A'idi" likeCount="200" viewCount="200" />
                    <PortofolioCard judul="Judul Portfolio" userName="Gilang Nur A'idi" likeCount="200" viewCount="200" />
                </div>
                <div className="btn-wrap">
                    <Button style="button primary" text="LIHAT LEBIH BANYAK" />
                </div>
            </div>
        )
    }
}

export default DisplayIdentitasNonDesainer;
