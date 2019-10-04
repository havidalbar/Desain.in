import React, { Component } from 'react';
import { Icon } from 'antd';
import './cstmCard.scss';
import '../layouts/typography.scss';

class CardContest extends Component {
    render() {
        return(
            <div className="card-contest">
                <div className="image-cover-contest">
                    <img className="img-contest" src={this.props.imageSrc}/>
                </div>
                <div className="card-content">
                    <p className="bigger-body-text">
                        {this.props.judul}
                    </p>
                    <p className="Nunito-sbld">
                        oleh <span className="link" >{this.props.penyelenggara}</span>
                    </p>
                    <div className="card-action">
                        <div className="indicator view">
                            <Icon type="star" className="icn-wrap" style={{color: '#F2C94C'}} />
                            <p className="ind-content">idr. {this.props.price}</p>
                        </div>
                        <div className="indicator like">
                            <Icon type="clock-circle" className="icn-wrap" style={{color: '#EB5757'}} theme="filled" /> 
                            <p className="ind-content">{this.props.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardContest;