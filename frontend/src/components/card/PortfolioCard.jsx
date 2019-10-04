import React, { Component } from 'react';
import { Icon } from 'antd';
import Button from '../button/ButtonAntd';
import './portfolioCard.scss';
import '../layouts/typography.scss';

class CardPortfolio extends Component {
    render() {
        return(
            <div className="card-portfolio">
                <div className="image-cover">
                    <img className="img" src={this.props.imageSrc}/>
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
                            <Icon type="eye" />
                            <p>{this.props.viewCount} views</p>
                        </div>
                        <div className="indicator like">
                            <Icon type="heart" /> 
                            <p>{this.props.likeCount} likes</p>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default CardPortfolio;