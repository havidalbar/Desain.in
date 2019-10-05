import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import Button from '../../button/Button';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

class RightMenu extends Component {
    render() {
        return (
            <Menu mode={this.props.mode}>
                <MenuItem key="beranda">
                    <a href="/">BERANDA</a>
                </MenuItem>
                <MenuItem key="kontes">
                    <a href="/contest">KONTES</a>
                </MenuItem>
                <SubMenu title={<span>LAYANAN</span>}>
                    <MenuItem>
                        <a href="/profile">PESAN DESAIN</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="/create-contest">BUAT KONTES</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="/rekomendasi">CARI REKOMENDASI</a>
                    </MenuItem>
                </SubMenu>
                <MenuItem className="button-nav">
                    <Link to="/login">
                        <Button style="button primary" text="Masuk"></Button>
                    </Link>
                </MenuItem>
                <MenuItem className="button-nav">
                    <Link to="/register">
                        <Button style="button secondary" text="Daftar"></Button>
                    </Link>
                </MenuItem>
            </Menu>
        );
    }
}

export default RightMenu;