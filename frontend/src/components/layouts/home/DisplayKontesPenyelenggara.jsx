import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PortofolioCard from '../../card/PortofolioCardIdentitas';
import Button from '../../button/Button';
import '../../layouts/typography.scss';
import './display.scss';
import { Icon } from 'antd';

class DisplayKontesPenyelenggara extends Component {
    render() {
        return (
            <div className="display">
                <div className="image-cover-kontes">
                    <img className="img-kontes" src="https://storage.cloud.google.com/aldiwildan_bucket/foto-010.jpg" />
                </div>
                <br />
                <br />
                <br />
                <br />
                <p className="title-3">
                    Kontes desain logo pertamini
                    </p>
                <p className="bigger-body-text">
                    oleh <span className="link">PT. Bahu Membahu</span>
                </p>
                <br />
                <p className="bigger-body-text">
                    Sebuah kontes merancang logo pertamini, dimana kami semua berharap logo yang dirancang dapat mewakili seluruh visi dan misi perusahaan kami. Karena menurut kamu logo adalah cerminan pertama sebuah perusahaan                    </p>
                <br />
                <br />
                <p className="bigger-body-text">
                    Hadiah <span className="harga">Rp. 10.000.000</span>
                </p>
                <br />
                <div className="button-between">
                    <Link to="/join-contest">
                        <Button style="button primary" text="IKUT KONTES" />
                    </Link>
                    <Button style="button secondary" text="UNDUH PANDUAN" />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p className="title-3 title-display">
                    Cek karya yang sudah masuk ya
                </p>
                <div class="card-wrapper">
                    <PortofolioCard judul="Fireberry" userName="Claudy Adelia" likeCount="200" viewCount="200" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-002.jpg"/>
                    <PortofolioCard judul="Freeze Fuzz" userName="Wildan A" likeCount="200" viewCount="200" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-005.jpg"/>
                    <PortofolioCard judul="Bat Berry" userName="Havid Albar" likeCount="200" viewCount="200" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-003.jpg"/>
                    <PortofolioCard judul="Abstract Illustrations" userName="Gilang Nur A'idi" likeCount="200" viewCount="200" imageSrc="https://storage.cloud.google.com/aldiwildan_bucket/foto-001.jpg"/>
                </div>
                <div className="btn-wrap">
                    <Button style="button primary" text="LIHAT LEBIH BANYAK" />
                </div>
            </div>
        )
    }
}

export default DisplayKontesPenyelenggara;
