import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import PrimaryButton from '../../button/Primary';
import './homeHero.scss';

class HomeHero extends Component {
    render() {
        return(
            <div className="hero">
                <Row gutter={40}>
                    <Col span={18}>
                        <Carousel autoplay  effect="fade">
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                        </Carousel>
                    </Col>
                    <Col className="side-hero" span={6} gutter={8}>
                        <Row type="flex" justify="space-between">
                            <div className="side-menu-item">
                                <span className="side-menu-title">
                                    PORTFOLIO
                                </span>
                            </div>    
                       
                            <div className="side-menu-item">
                                <span className="side-menu-title">
                                    PORTFOLIO
                                </span>
                            </div>    
                       
                            <div className="side-menu-item">
                                <span className="side-menu-title">
                                    PORTFOLIO
                                </span>
                            </div>    
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    };
}

export default HomeHero;