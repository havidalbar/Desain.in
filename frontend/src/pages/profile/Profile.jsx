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
                            <p className="title-3">
                                Paket Layanan Jasa
                            </p>
                        </div>
                    </div>
                    <table className="tabel-layanan">
                        <tr>
                            <th className="tabel-head">Detail Paket</th>
                            <td>
                                <p className="price-package">
                                    IDR. 600.000
                                </p>
                                <p className="package">
                                    Premium
                                </p>
                                <p className="regular-body-text">
                                    3 konsep logo termasuk file JPEG, PNG, dan file asli. Keseluruhannya dapat diedit. Saya memberikan tambahan berupa social media kit.
                                </p>
                            </td>
                            <td>
                                <p className="price-package">
                                    IDR. 300.000
                                </p>
                                <p className="package">
                                    Standart
                                </p>
                                <p className="regular-body-text">
                                    2 konsep logo termasuk file JPEG, PNG, dan file asli. Keseluruhannya dapat diedit. 
                                </p>
                            </td>
                            <td>
                                <p className="price-package">
                                    IDR. 250.000
                                </p>
                                <p className="package">
                                    Dasar
                                </p>
                                <p className="regular-body-text">
                                    1 konsep logo termasuk file JPEG, PNG, dan file asli. Hanya file dasar yang dapat diedit
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th className="service-head">
                                Logo Transparan
                            </th>
                            <td >
                                <p className="check-feature"style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                            <td >
                                <p className="check-feature"style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                            <td >
                                <p className="check-feature"style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th className="service-head">
                                High Definition
                            </th>
                            <td >
                                <p className="check-feature"style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                            <td >
                                <p className="check-feature"style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                            <td >
                                <p className="check-feature"style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th className="service-head">
                                File Desain *ex .ai .psd
                            </th>
                            <td >
                                <p className="check-feature"style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                            <td >
                                <p className="check-feature"style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                            <td >
                                <p className="check-feature"style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th className="service-head">
                                Desain ATK
                            </th>
                            <td >
                                <p className="check-feature"style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                            <td >
                                <p className="check-feature"style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                            <td >
                                <p className="check-feature"style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th className="service-head">
                                Social Media Kit
                            </th>
                            <td >
                                <p className="check-feature" style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                            <td >
                                <p className="check-feature" style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                            <td >
                                <p className="check-feature" style={{ width: '18vw', padding: '4vh 2vw', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <Icon type="check-circle" theme="filled" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '2em', color: '#0020DA'}}/>    
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th className="service-head">
                                Revisi
                            </th>
                            <td>
                                <p className="package-detail" style={{padding: '4vh 2vw'}}>
                                    Revisi
                                </p>
                            </td>
                            <td>
                                <p className="package-detail" style={{padding: '4vh 2vw'}}>
                                    3 Revisi
                                </p>
                            </td>
                            <td>
                                <p className="package-detail" style={{padding: '4vh 2vw'}}>
                                    2 Revisi
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th className="service-head">
                                Waktu Pengerjaan
                            </th>
                            <td>
                                <p className="package-detail" style={{padding: '4vh 2vw'}}>
                                    2 Hari
                                </p>
                            </td>
                            <td>
                                <p className="package-detail" style={{padding: '4vh 2vw'}}>
                                    2 Hari
                                </p>
                            </td>
                            <td>
                                <p className="package-detail" style={{padding: '4vh 2vw'}}>
                                    2 Hari
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th className="service-head">
                            
                            </th>
                            <td>
                                <p className="package-detail" style={{padding: '4vh 2vw'}}>
                                    <Button  style="button primary" text="PREMIUM"/>
                                </p>
                            </td>
                            <td>
                                <p className="package-detail" style={{padding: '4vh 2vw'}}>
                                    <Button  style="button secondary" text="STANDART"/>
                                </p>
                            </td>
                            <td>
                                <p className="package-detail" style={{padding: '4vh 2vw'}}>
                                    <Button  style="button secondary" text="DASAR"/>
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default Profile;
