import React, { Component } from 'react';
import {Menu} from 'antd';
import PrimaryButton from '../../button/Primary';
import SecondaryButton from '../../button/Secondary';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

class RightMenu extends Component {
render(){
    return(
        <Menu mode={this.props.mode}>
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
                <PrimaryButton text="Masuk"></PrimaryButton>
            </MenuItem>
            <MenuItem  className="button-nav">
                <SecondaryButton text="Daftar"></SecondaryButton>
            </MenuItem>
        </Menu>
    );
}
}

export default RightMenu;