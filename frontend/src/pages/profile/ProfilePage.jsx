import React, { Component } from 'react';
import { Tag, Col } from 'antd';
import Navbar from '../../components/layouts/navbar/NavBar';
import DisplayPortfolio from '../../components/layouts/home/DisplayPortofolio';
import './profilePage.scss';
import Deco from '../../assets/images/profile.svg';

class ProfilePage extends Component {
    render(){
        return(
            
            <div className="profile-page">
            <Navbar/>
                <div className= "halfHero" >
                    <img className="halfHeroImage" src={Deco} ></img>
                    
                </div>
            </div>
        )
    }
}

export default ProfilePage