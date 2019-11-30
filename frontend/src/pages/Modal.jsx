import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import '../components/layouts/home/modal.scss';

class App extends Component {
  state = { visible: false };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Modal
          visible={this.props.visible}
          destroyOnClose={true}
          onCancel={this.handleCancel}
          closable={true}
        >
          <p className="title-3">
            {this.props.title}
          </p>
          <div className="image-cover">
            <img className="modal-image" src={this.props.image} />
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
      </div>
    )
  }
}

export default App;