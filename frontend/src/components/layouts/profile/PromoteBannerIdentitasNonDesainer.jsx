import React, { Component } from 'react';
import './promoteBanner.scss';
import '../../layouts/typography.scss';
import Deco from '../../../assets/images/profile-banner.svg';


class PromoteBannerIdentitasNonDesainer extends Component {
    render() {
        return (
            <div className="promote-banner-profile">
                <img className="image-bg-profile" src={Deco} />

                <div className="avatar-wrap-profile">
                    <div className="avatar-profile">
                    </div>
                    <div className="avatar-content-profile">
                        <p className="title-profile">Muhamad Wildan Aldiansyah</p>
                        <p className="meta-info-profile">
                            <span className="link">Mendapat Invitasi</span>
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default PromoteBannerIdentitasNonDesainer;