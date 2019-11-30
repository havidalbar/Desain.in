import React, { Component } from 'react';
import Logo from '../../../assets/images/logo.svg';
import './footer.scss'

let indents = [];

for (let i = 0; i < 3; i++) {
    indents.push(
        <li>
            <div className="avatar-wrap">
                <div className="avatar">
                <img src="https://storage.cloud.google.com/aldiwildan_bucket/foto-005.jpg" style={{width: 'inherit',height: 'inherit', borderRadius: '50px'}}/>
                </div>
                <div className="avatar-content">
                <p className="title">
                Freeze Fuzz
                </p>
                <p className="meta-info">
                    oleh <span className="link">PT. Bahu Membahu</span>
                </p>
                </div>
            </div>
        </li>
    );
}

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
                                <li><a href="/contest">Kontes</a></li>
                                <li><a href="/profile">Portfolio</a></li>
                            </ul>
                        </div>
                        <div className="item">
                            <span className="item-title">Butuh Desain</span>
                            <ul>
                                <li><a href="/create-contest">Buat Kontes</a></li>
                                <li><a href="/profile">Pesan Desain</a></li>
                                <li><a href="/profile">Lihat Portfolio</a></li>
                            </ul>
                        </div>
                        <div className="item grow">
                            <span className="item-title">Kontes Hangat</span>
                            <ul>
                                {indents}
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