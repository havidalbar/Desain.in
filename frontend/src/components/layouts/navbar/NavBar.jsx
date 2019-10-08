import React, { Component } from 'react';
import { Drawer, Button, Menu } from 'antd';
import RightMenu from './RightMenu';
import Logo from '../../../assets/images/logo-2.svg';
import './nav.css';

const {Item : MenuItem, SubMenu} = Menu;

class NavBar extends Component {
    state = {
        visible: false,
    } 

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <nav className="menuBar">
                <div className="logo" onClick={()=>{window.location.replace('/')}}>
                    <img  className="navLogo" src={Logo} alt="Design.in"></img>
                </div>
                <div className="menuCon">
                    <div className="rightMenu">
                        <RightMenu mode="horizontal"/>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;