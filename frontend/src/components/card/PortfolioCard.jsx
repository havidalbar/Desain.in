import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../../pages/Modal';
import { Icon } from 'antd';
import './cstmCard.scss';
import '../layouts/typography.scss';

class CardPortfolio extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    render() {
        return (
            <div className="card-portfolio">
                <Modal visible={this.state.visible} title={this.props.title} image={this.props.imageSrc} likeCount={this.props.likeCount} viewCount={this.props.viewCount} />
                <div className="image-cover">
                    <img className="img" src={this.props.imageSrc} onClick={this.showModal} />
                </div>
                <div className="card-content">
                    <p className="bigger-body-text">
                        {this.props.judul}
                    </p>
                    <p className="Nunito-sbld">
                        oleh <span className="link" >{this.props.userName}</span>
                    </p>
                    <div className="card-action">
                        <div className="indicator view">
                            <Icon type="eye" className="icn-wrap" />
                            <p className="ind-content">{this.props.viewCount} views</p>
                        </div>
                        <div className="indicator like">
                            <Icon type="heart" className="icn-wrap" />
                            <p className="ind-content">{this.props.likeCount} likes</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default CardPortfolio;