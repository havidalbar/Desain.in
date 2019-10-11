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
                    <PortofolioCard judul="Fishception - Warmup" userName="Muhamad Wildan Aldiansyah" likeCount="221" viewCount="432" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-026.jpg"/>
                    <PortofolioCard judul="Vectober 04 - Freeze" userName="M Havid Albar P" likeCount="190" viewCount="320" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-002.jpg"/>
                    <PortofolioCard judul="Mr Florist" userName="Gilang Nur A'idi" likeCount="175" viewCount="234" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-003.jpg"/>
                    <PortofolioCard judul="GridFriday Fork" userName="Adam Sulthoni" likeCount="199" viewCount="297" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-025.png"/>
                </div>
                <div className="btn-wrap">
                    <Button style="button primary" text="LIHAT LEBIH BANYAK" />
                </div>
            </div>
        )
    }
}

export default DisplayPortofolio;
