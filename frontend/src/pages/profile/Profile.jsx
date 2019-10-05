import React, { Component } from 'react';
import { Icon, Tag } from 'antd';
import Navbar from '../../components/layouts/navbar/NavBar';
import Footer from '../../components/layouts/footer/Footer';
import Display from '../../components/layouts/profile/DisplayPortofolio';
import Banner from '../../components/layouts/profile/BannerIdentitas';
import Button from '../../components/button/Button';
import './profile.scss'
import '../../components/layouts/typography.scss';

class Profile extends Component {
    render() {
        return(
            <div class="profile">
                <Navbar/>
                <Banner image="" title="Tony Hurella" meta="Mendapat Invitasi" work="24" kontes="2" portfolio="10"/>
                <div className="profile-description">
                    <div className="up-content">
                        <div className="left-item">
                            <p className="sub-title">
                                Desainer Identitas Brand
                            </p>
                            <div className="rating">
                                <Icon type="star" className="icn-wrap" theme="filled" style={{color: '#FF9B21'}}/>
                                <p className=" ind-content meta-rating">4.5 dari 5.0</p>
                            </div>
                        </div>
                        <div className="left-item">
                            <Button style="button primary" text="PESAN DESAIN"/>
                        </div>
                    </div>
                    <div className="tag">
                        <p className="meta-rating">
                            Tag
                        </p>
                        <div className="tag-wrap">
                            <Tag color="geekblue">Adobe Illustration</Tag>
                            <Tag color="geekblue">Adobe Illustration</Tag>
                        </div>
                    </div>
                    <p className="title-3">
                        Deskripsi
                    </p>
                    <p className="bigger-body-text">
                    Saya adalah seorang desainer yang penuh dengan passion. Setiap pekerjaan akan sangat berarti bagi saya, sama seperti anda mencurahkan banyak pengalaman dan waktu untuk merawat seorang anak. Tentunya bila tidak merancang dan mempersiapkan yang terbaik hal tersebut takkan berjalan dengan baik. Saya Tony Hurella, akan membarikan pengalaman terbaik untuk setiap proyek kreatif anda.
                    </p>
                </div>
                <Display judulDisplay="Portfolio, " namaPengguna="Tony"/>
                


                <div className="tabel-layanan">
                    <div className="up-content">
                        <div className="left-item">

                        </div>
                        <div className="right-item">
                            <Button style="button primary"/>>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Profile;
