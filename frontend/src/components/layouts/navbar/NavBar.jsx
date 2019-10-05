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
                <div className="logo">
                    <img  className="navLogo" src={Logo} alt="Design.in"></img>
                </div>
                <div className="menuCon">
                    <div className="rightMenu">
                        <RightMenu mode="horizontal"/>
                    </div>
                    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                        <span className="barsBtn"></span>
                    </Button>
                    <Drawer
                        title="MENU"
                        placement="right"
                        closable={!false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        className="drawer">
                        <Menu mode="vertical">
                            <MenuItem key="beranda">
                                <a href="/#">BERANDA</a>
                            </MenuItem>
                            <MenuItem key="kontes">
                                <a href="kontes">KONTES</a>
                            </MenuItem>
                            <SubMenu title={<span>LAYANAN</span>}>
                                <MenuItem>
                                    <a href="/#">PESAN DESAIN</a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="/#">BUAT KONTES</a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="/#">CARI REKOMENDASI</a>
                                </MenuItem>
                            </SubMenu>
                            <MenuItem  className="button-nav">
                                <a href="/#">MASUK</a>
                            </MenuItem>
                            <MenuItem  className="button-nav">
                                <a href="/#">DAFTAR</a>
                            </MenuItem>
                        </Menu>
                    </Drawer>
                </div>
            </nav>
        );
    }
}

export default NavBar;