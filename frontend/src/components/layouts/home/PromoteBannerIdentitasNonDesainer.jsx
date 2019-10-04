import React, { Component } from 'react';
import './promoteBanner.scss';
import '../../layouts/typography.scss';
import Deco from '../../../assets/images/profile-banner.svg';


class PromoteBannerIdentitasNonDesainer extends Component {
    render() {
        return (
            <div className="promote-banner">
                <img className="image-bg-profile" src={Deco} />
                
                    <div className="avatar-wrap">
                        <div className="avatar">
                        </div>
                        <div className="avatar-content">
                            <p className="title">Havid Albar</p>
                            <p className="meta-info">
                            <span className="link">Mendapat Invitasi</span>
                            </p>
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default PromoteBannerIdentitasNonDesainer;