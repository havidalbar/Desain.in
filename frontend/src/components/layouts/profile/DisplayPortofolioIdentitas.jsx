import React, { Component } from 'react';
import Modal from '../../../pages/Modal';

import PortofolioCard from '../../card/PortfolioCard';
import Button from '../../button/Button';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayPortofolioIdentitas extends Component {
    render() {
        return (
            <div className="display">
                <p className="title-3 title-display">
                    {this.props.judulDisplay} {this.props.namaPengguna}
                </p>
                <div class="card-wrapper">
                    <PortofolioCard judul="Fishception - Warmup" userName="Muhamad Wildan Aldiansyah" likeCount="221" viewCount="432" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-026.jpg"/>
                    <PortofolioCard judul="Vectober 04 - Freeze" userName="Muhamad Wildan Aldiansyah" likeCount="264" viewCount="523" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-029.png"/>
                    <PortofolioCard judul="Illustrasions This" userName="Muhamad Wildan Aldiansyah" likeCount="299" viewCount="597" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-031.jpg"/>
                    <PortofolioCard judul="Fishception - Warmup" userName="Muhamad Wildan Aldiansyah" likeCount="343" viewCount="603" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-022.jpg"/>
                </div>
                <div className="btn-wrap">
                    <Button style="button primary" text="LIHAT LEBIH BANYAK" />
                </div>
            </div>
        )
    }
}

export default DisplayPortofolioIdentitas;
