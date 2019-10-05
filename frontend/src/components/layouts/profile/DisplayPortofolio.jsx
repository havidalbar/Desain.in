import React, { Component } from 'react';
import Modal from '../../../pages/Modal';

import PortofolioCard from '../../card/PortfolioCard';
import Button from '../../button/Button';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayPortofolio extends Component {
    render() {
        return (
            <div className="display">
                <p className="title-3 title-display">
                    {this.props.judulDisplay} {this.props.namaPengguna}
                </p>
                <div class="card-wrapper">
                    <PortofolioCard judul="Fishception - Warmup" userName="Claudy Adelia" likeCount="200" viewCount="200" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-001.jpg"/>
                    <PortofolioCard judul="Vectober 04 - Freeze" userName="Havid Albar" likeCount="200" viewCount="200" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-002.jpg"/>
                    <PortofolioCard judul="Mr Florist" userName="Wildan Aldiansyah" likeCount="200" viewCount="200" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-003.jpg"/>
                    <PortofolioCard judul="GridFriday Fork" userName="Gilang Nur Aidi" likeCount="200" viewCount="200" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-004.jpg"/>
                </div>
                <div className="btn-wrap">
                    <Button style="button primary" text="LIHAT LEBIH BANYAK" />
                </div>
            </div>
        )
    }
}

export default DisplayPortofolio;
