import React, { Component } from 'react';
import { Row, Col, Form, Input } from 'antd';
import Logo from '../../assets/images/logo-2.svg';
import Deco from '../../assets/images/login-people.svg';
import Button from '../../components/button/Button';
import './login.scss';

class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        
        const formItemLayout = "vertical";
        const { getFieldDecorator } = this.props.form;

        return (
                <Row>
                <Col className="login" span={10}>
                    <div className="login-logo">
                        <img  className="login-logo" src={Logo} alt="Design.in"/>
                    </div>
                    <h1 className="title-3">Login</h1>
                        <Form layout="vertical" onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item label="Email" {...formItemLayout} >
                                {getFieldDecorator('email', { 
                                        rules: [{ required:true, message: 'Please input your email!' }],
                                        }
                                    )(
                                        <Input placeholder="improudtodesign@mail.com" />,)
                                }
                            </Form.Item>
                            <Form.Item label="Password" type="password" {...formItemLayout}>
                                {getFieldDecorator('password', { 
                                        rules: [{ required:true, message: 'Please input your email!' }],
                                        }
                                    )(
                                        <Input placeholder="password" />,)
                                    }
                            </Form.Item>
                            <Form.Item>
                                <Button style="button primary fluid" text="masuk"  htmlType="submit"/>
                            </Form.Item>
                            <Form.Item>
                            <p className="regular-body"> <a className="link" href="">Belum Punya Akun?</a> Buat baru yuk</p>
                            </Form.Item>
                        </Form>                        
                </Col>
                <Col className="fancy-image" span={14}>
                    <img className="fancy-image-content" src={Deco}  alt="illustration" />
                </Col>
            </Row>
        );
    }
}

const WrappedLogin = Form.create()(Login);

export default WrappedLogin;