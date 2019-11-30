import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

import { Row, Col, Form, Input, message } from 'antd';
import Logo from '../../assets/images/logo-2.svg';
import Deco from '../../assets/images/login-people.svg';
import Button from '../../components/button/Button';
import './login.scss';

const URL_LOGIN = 'http://localhost:5000/auth/login';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null
        };
    }

    componentWillMount() {
        if (localStorage.token) {
                window.location.replace('/');
            
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (err) { return;}

            const body = {
                email: values.email,
                password: values.password
            }

            Axios.post(URL_LOGIN, body, {
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => {
                const { userId, token, status } = response.data;
                localStorage.token = token;
                localStorage.userId = userId;
                localStorage.userStatus = status;
                this.props.history.push('/');
            }).catch(error => {
                const { data } = error.response;
                this.setState({ errorMessage: true });
                message.error(data.message);
            });
        });
    };

    render() {

        const formItemLayout = "vertical";
        const { getFieldDecorator } = this.props.form;

        return (
            <Row>
                <Col className="login" span={10}>
                    <div className="login-logo">
                        <img className="login-logo" src={Logo} alt="Design.in" />
                    </div>
                    <h1 className="title-3">Login</h1>
                    <Form layout="vertical" onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item label="Email" {...formItemLayout} >
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your email!' }],
                            })(<Input placeholder="improudtodesign@mail.com" type="email" />)}
                        </Form.Item>
                        <Form.Item label="Password" type="password" {...formItemLayout}>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your password!' }],
                            })(<Input.Password placeholder="password"  minLength="8" />)}
                        </Form.Item>
                        <Form.Item>
                            <Button style="button primary fluid" text="masuk" type="submit" />
                        </Form.Item>
                        <Form.Item>
                            <p className="regular-body"> <a className="link" href="/register">Belum Punya Akun?</a> Buat baru yuk</p>
                        </Form.Item>
                    </Form>
                </Col>
                <Col className="fancy-image" span={14}>
                    <img className="fancy-image-content" src={Deco} alt="illustration" />
                </Col>
            </Row>
        );
    }
}

const WrappedLogin = Form.create()(Login);

export default WrappedLogin;