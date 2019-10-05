import React, { Component } from 'react';
import './promoteBanner.scss';
import '../../layouts/typography.scss';
import Deco from '../../../assets/images/profile.svg';
import AvatarDetail from '../../avatar-detail/AvatarDetail';
import './bannerIdentitas.scss';


class BannerIdentitas extends Component {
    render() {
        return (
            <div className="halfHero" >
                <img className="halfHeroImage" src={Deco} ></img>
                <div className="profile-content">
                    <AvatarDetail image={this.props.image} title={this.props.title} meta={this.props.meta}/>
                    <p className="experience">
                        {this.props.work} Pekerjaan | {this.props.kontes} Kontes | {this.props.portfolio} portfolio
                    </p>
                </div>
            </div>
        )
    }
}

export default BannerIdentitas;