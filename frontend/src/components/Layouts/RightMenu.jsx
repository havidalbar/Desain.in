import React, { Component } from 'react';
import { Menu } from 'antd';
import ButtonPrimary from '../Button/Primary';

class RightMenu extends Component {
    render() {
        return (
            <Menu mode={this.props.mode}>
                <Menu.Item key="mail">
                    <ButtonPrimary text="Masuk"></ButtonPrimary>
                    {/* <a href="/">Signin</a> */}
                </Menu.Item>
                <Menu.Item key="app">
                    <ButtonPrimary text="Daftar"></ButtonPrimary>
                    {/* <a href="/">Signup</a> */}
                </Menu.Item>
            </Menu>
        );
    }
}

export default RightMenu;