import React, { Component } from 'react';
import './cstmCard.scss';
import '../layouts/typography.scss';

class CardPortfolioRekomendasiChose extends Component {
    render() {
        return (
            <div className="card-portfolio">
                <div className="image-cover-rekomendasi">
                    <img className="img-rekomendasi" src={this.props.imageSrc} />
                </div>
                <div className="card-content">
                    <p className="bigger-body-text">
                        {this.props.judul}
                    </p>
                </div>

            </div>
        )
    }
}

export default CardPortfolioRekomendasiChose;