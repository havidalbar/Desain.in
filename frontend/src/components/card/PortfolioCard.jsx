import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './cstmCard.scss';
import '../layouts/typography.scss';
import { Modal, Icon } from 'antd';
import '../../components/layouts/home/modal.scss';


  
  
  
  

class CardPortfolio extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    render() {
        return (
            <div className="card-portfolio" >
                <Modal 
                visible={this.state.visible} 
                destroyOnClose={true}
                title={this.props.title} 
                onCancel={()=>{
            this.setState({visible:false}) 
          }}
          onOk={()=>{
            this.setState({visible:false}) 
          }}
          onCancel={()=>{
            this.setState({visible:false}) 
          }}
          >
                <p className="title-3">
              {this.props.title}
            </p>
            <div className="image-cover">
              <img className="modal-image" src={this.props.imageSrc} />
            </div>
            <div className="modal-content">
              <p className="regular-body-text">
                I’ve got what they call an “active imagination.” Sense forever I’ve been creeped out in the dark.
                It’s like a constant feeling of being chased. Turning stomach, sweaty hands and panicky thoughts.
                Growing up in a Christian home I’d always go to Jesus when I got scared and he’d always help. Even when our relationship was not in a good spot.
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
                
                </Modal>
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