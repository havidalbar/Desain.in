import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import './homeHero.scss';

class HomeHero extends Component {
    render() {
        return (
            <div className="hero">
                <Row gutter={40}>
                    <Col span={18}>
                        <Carousel autoplay effect="fade">
                            <div>
                                <img src="https://storage.cloud.google.com/aldiwildan_bucket/foto-003.jpg" style={{width: 'inherit',width: 'inherit'}}/>
                            </div>
                            <div>
                                <img src="https://storage.cloud.google.com/aldiwildan_bucket/foto-007.jpg" style={{width: 'inherit',height: 'inherit'}}/>
                            </div>
                            <div>
                                <img src="https://storage.cloud.google.com/aldiwildan_bucket/foto-001.jpg" style={{width: 'inherit',height: 'inherit'}}/>
                            </div>
                            <div>
                                <img src="https://storage.cloud.google.com/aldiwildan_bucket/foto-005.jpg" style={{width: 'inherit',height: 'inherit'}}/>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={6}>
                        <Row className="side-hero" justify="space-arround">
                            <div className="side-menu-item">
                            <img src="https://storage.cloud.google.com/aldiwildan_bucket/foto-002.jpg" style={{width: 'inherit',height: 'inherit', borderRadius: '30px'}}/>
                            </div>

                            <div className="side-menu-item">
                            <img src="https://storage.cloud.google.com/aldiwildan_bucket/foto-004.jpg" style={{width: 'inherit',height: 'inherit', borderRadius: '30px'}}/>
                            </div>

                            <div className="side-menu-item">
                            <img src="https://storage.cloud.google.com/aldiwildan_bucket/foto-006.jpg" style={{width: 'inherit',height: 'inherit', borderRadius: '30px'}}/>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    };
}

export default HomeHero;