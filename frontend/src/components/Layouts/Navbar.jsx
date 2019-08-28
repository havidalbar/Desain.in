import React, { Component } from 'react';
import './Nav.css';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { Drawer, Button } from 'antd';
import Logo from '../../assets/img/desain-in-footer.svg';

class Navbar extends Component {
    state = {
        current: 'mail',
        visible: false
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
                <div className="logo">
                    <img src={Logo} alt="logo"></img>
                </div>
                <div className="menuCon">
                    <div className="leftMenu">
                        <LeftMenu mode="horizontal" />
                    </div>
                    <div className="rightMenu">
                        <RightMenu mode="horizontal" />
                    </div>
                    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                        <span className="barsBtn"></span>
                    </Button>
                    <Drawer
                        title="Basic Drawer"
                        placement="right"
                        closable={!false}
                        onClose={this.onClose}
                        visible={this.state.visible}>
                        <LeftMenu mode="vertical" />
                        <RightMenu mode="vertical" />
                    </Drawer>

                </div>
            </nav>
        );
    }
}

export default Navbar;