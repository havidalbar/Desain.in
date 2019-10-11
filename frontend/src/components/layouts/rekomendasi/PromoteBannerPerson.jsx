import React, { Component } from 'react';
import './promoteBanner.scss';
import '../../layouts/typography.scss';
import Deco from '../../../assets/images/penyelenggara.svg';
import { Row, Form, Input } from 'antd';


class PromoteBannerPerson extends Component {
    render() {
        const formItemLayout = "vertical";
        return (
            <div className="promote-banner">
                <img className="halfHeroImage-rekomendasi" src={Deco} ></img>
                <div className="ads-content">
                    <p className="title-3">
                        Pilih dari beberapa desainer
        yang bergabung bersama kami
                </p>
                    <div className="wrapper">
                        <p className="bigger-body-text">
                            Sesuaikan budget yang kamu miliki
                    </p>
                        <Row gutter={9}>
                            <Form layout="vertical" onSubmit={this.handleSubmit} className="rekomendasi-wrap">
                                <Form.Item label="IDR" {...formItemLayout} >


                                    <Input placeholder="Harga Terendah" />

                                </Form.Item>
                                <Form.Item label="IDR" {...formItemLayout} >


                                    <Input placeholder="Harga Tertinggi" />

                                </Form.Item>
                            </Form>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default PromoteBannerPerson;