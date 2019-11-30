import React, { Component } from 'react';
import './avatarDetail.scss';
import '../../components/layouts/typography.scss';

class AvatarDetail extends Component {
    render() {
        return(
            <div className="avatar-wrap">
                <img src="https://storage.cloud.google.com/aldiwildan_bucket/Aldi.jpg" className="avatar"/>
                <div className="avatar-content">
                    <p className="title chat">
                        {this.props.title}
                    </p>
                    <p className="meta-into">
                        {this.props.meta}
                    </p>
                </div>
            </div>
        );
    };
}

export default AvatarDetail;