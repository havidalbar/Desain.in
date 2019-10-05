import React, { Component } from 'react';
import Button from '../../button/Button';
import '../../layouts/typography.scss';
import './promoteBanner.scss';
import Deco from '../../../assets/images/KontesNotSigned.svg';
import { Row , Form, Input } from 'antd';


class PromoteBannerContestNotSigned extends Component {
    render() {
        const formItemLayout = "vertical";
        return(
            <div className="promote-banner">
                <img className="image-bg-kontes-not-signed" src={Deco}/>
                <div className="ads-content-not-signed">
                    <p className="title-3">
                    Ups! ini seperti anda 
                    belum menjadi bagian
                    dari kami
                    </p>
                    <div className="wrapper">
                        <p className="bigger-body-text">
                        Daftarkan dirimu sekarang, dan bergabung untuk
                        bantuan proyek kreatifmu
                        </p>
                    </div>
                    <Button style="button primary" text="DAFTAR SEKARANG"/>
                </div>
            </div>
        )
    }
}

export default PromoteBannerContestNotSigned;