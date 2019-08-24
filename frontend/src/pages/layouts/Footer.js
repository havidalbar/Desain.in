import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Logo from '../../assets/img/desain-in-footer.svg';
import Gambar from '../../assets/img/Ellipse.png';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="footer-wrap">
                    <Row gutter={16}>
                        <Col md={8} sm={24} xs={24}>
                            <div className="footer-intro">
                                <img src={Logo} className="footer-logo" alt="footer-logo"></img>
                                <div className="footer-title">
                                    Creative Market
                                </div>
                                <div className="footer-deskripsi">
                                    Apa saja bidang kreatifmu desain.in adalah 
                                    tempat untukmu berbagi pengalamanmu dan mendapatkan 
                                    keuntungan atas waktu yang sudah kamu dedikasikan
                                </div>
                            </div>
                        </Col>
                        <Col md={5} sm={24} xs={24}>
                            <div className="footer-about">
                                <div className="footer-desain">Desain.in</div>
                                <div className="footer-tentang">Tentang Kami</div>
                                <div className="footer-bantuan">Bantuan</div>
                                <div className="footer-kontak">Kontak Kami</div>
                                <div className="footer-kontes">Kontes</div>
                                <div className="footer-portofolio">Portofolio</div>
                            </div>
                        </Col>
                        <Col md={5} sm={24} xs={24}>
                            <div className="footer-menu">
                                <div className="footer-tanya">Butuh Desain?</div>
                                <div className="footer-menu-kontes">Buat Kontes</div>
                                <div className="footer-menu-pesan">Pesan Desain</div>
                                <div className="footer-menu-portofolio">Lihat Portofolio</div>
                            </div>
                        </Col>
                        <Col md={5} sm={24} xs={24}>
                            <div className="footer-kontes-atas">
                                <div className="footer-display-kontes">Kontes Hangat</div>
                                <div className="footer-item-kontes">
                                    <img className="gambar-kontes" src={Gambar} alt="gambar-footer"></img>
                                    <div className="judul-center">
                                    <div className="judul-kontes">Judul Kontes</div>
                                    <div className="nama-pembuat">Oleh PT Sejahtera</div>
                                    </div>
                                </div>
                                <div className="footer-item-kontes2">
                                    <img className="gambar-kontes" src={Gambar} alt="gambar-footer"></img>
                                    <div className="judul-center">
                                    <div className="judul-kontes">Judul Kontes</div>
                                    <div className="nama-pembuat">Oleh PT Sejahtera</div>
                                    </div>
                                </div>
                                <div className="footer-item-kontes2">
                                    <img className="gambar-kontes" src={Gambar} alt="gambar-footer"></img>
                                    <div className="judul-center">
                                    <div className="judul-kontes">Judul Kontes</div>
                                    <div className="nama-pembuat">Oleh PT Sejahtera</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="author">Made with a dari BCC untuk Malang dan Indonesia</div>
                </div>
            </footer>
        );
    }
}

export default Footer;