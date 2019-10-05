import React, { Component } from 'react';
import { Row, Col, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo-2.svg';
import Deco from '../../assets/images/login-people.svg';
import Button from '../../components/button/ButtonAntd';
import './login.scss';

const URL_LOGIN = 'http://localhost:5000/auth/login';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            done: false,
            login: false,
            errorMessage: "",
            user: {
                email: "",
                password: "",
            },
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const body = {
                    email: values.email,
                    password: values.password
                }

                fetch(URL_LOGIN, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(body),
                }).then(response => {
                    if (response.ok) {
                        return response.json();

                    }
                    return response.json().then(error => {
                        throw new Error(error.message);
                    });
                }).then(token => {
                    console.log('token' + token)
                    localStorage.token = token;
                    this.setState({ done: true });
                    this.setState({ login: false });
                    this.props.history.replace('/dashboard')
                }).catch(error => {
                    console.log('fetch error' + error)
                    this.setState({ errorMessage: error.message });
                    this.setState({ login: false })

                });
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
                        <img className="login-logo" src={Logo} alt="Design.in" />
                    </div>
                    <h1 className="title-3">Login</h1>
                    <Form layout="vertical" onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item label="Email" {...formItemLayout} >
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your email!' }],
                            }
                            )(
                                <Input placeholder="improudtodesign@mail.com" />)
                            }
                        </Form.Item>
                        <Form.Item label="Password" type="password" {...formItemLayout}>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your password!' }],
                            }
                            )(
                                <Input placeholder="password" />)
                            }
                        </Form.Item>
                        <Form.Item>
                            <Link to="/">
                                <Button style="button primary fluid" text="masuk" htmlType="submit" onClick={this.handleSubmit} />
                            </Link>
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