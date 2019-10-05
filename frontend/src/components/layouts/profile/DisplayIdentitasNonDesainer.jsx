import React, { Component } from 'react';
import PortofolioCard from '../../card/PortfolioCard';
import Button from '../../button/Button';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayIdentitasNonDesainer extends Component {
    render() {
        return (
            <div className="display">
                <p className="title-3 title-display">
                    Portofolio Claudy Adelia
                </p>
                <div class="card-wrapper">
                    <PortofolioCard judul="Fireberry" userName="Claudy Adelia" likeCount="200" viewCount="200" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-003.jpg" />
                    <PortofolioCard judul="Freeze Fuzz" userName="Claudy Adelia" likeCount="200" viewCount="200" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-002.jpg" />
                    <PortofolioCard judul="Bat Berry" userName="Claudy Adelia" likeCount="200" viewCount="200" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-001.jpg" />
                    <PortofolioCard judul="Abstract Illustrations" userName="Claudy Adelia" likeCount="200" viewCount="200" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-007.jpg" />
                </div>
                <div className="btn-wrap">
                    <Button style="button primary" text="LIHAT LEBIH BANYAK" />
                </div>
            </div>
        )
    }
}

export default DisplayIdentitasNonDesainer;
