import React, { Component } from 'react';
import Logo from '../../../assets/images/logo.svg';
import './footer.scss'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="left-item">
                    <img className="footer-logo" src={Logo} alt="Design.in"></img>
                    <div className="motto">Creative Market</div>
                    <div className="des">
                        <p> 
                            Apa saja bidang kreatifmu desain.in adalah
                            tempat untukmu berbagi pengalamanmu
                            dan mendapatkan keuntungan atas waktu
                            yang sudah kamu dedikasikan 
                        </p>
                    </div>
                </div>
                <div className="right-item">
                    <div className="footer-content">
                        <div className="item">
                            <span className="item-title">Design.in</span>
                            <ul>
                                <li><a href="/#">Tentang Kami</a></li>
                                <li><a href="/#">Bantuan</a></li>
                                <li><a href="/#">Kontak Kami</a></li>
                                <li><a href="/#">Kontes</a></li>
                                <li><a href="/#">Portfolio</a></li>
                            </ul>
                        </div>
                        <div className="item">
                            <span className="item-title">Butuh Desain</span>
                            <ul>
                                <li><a href="/#">Buat Kontes</a></li>
                                <li><a href="/#">Pesan Desain</a></li>
                                <li><a href="/#">Lihat Portfolio</a></li>
                            </ul>
                        </div>
                        <div className="item grow">
                            <span className="item-title">Kontes Hangat</span>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className="signature">
                        Made with ♥ dari BCC untuk Malang dan Indonesia
                    </div>
                </div>
            </div>
        );
    };
}

export default Footer;