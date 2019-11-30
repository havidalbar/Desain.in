import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Row, Col, Form, Input, message } from 'antd';
import Button from '../../components/button/Button';
import './register.scss';
import Axios from 'axios';

const URL_SINGUP = 'http://localhost:5000/auth/signup';
class Register extends Component {

    componentWillMount() {
        if (localStorage.token) {
            window.location.replace('/');

        }
    }

    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null
        };
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('kata sandi harus sama yaa!');
        }
        callback();
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) { return; }

            const body = {
                nama: values.nama,
                email: values.email,
                password: values.password,
                phone_number: values.phone_number
            }

            if (body.password !== values.confirmPassword) {
                return;
            }

            Axios.post(URL_SINGUP, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response);
                if (response.status == 200 || response.status == 201) {
                    this.props.history.push('login');
                }
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
                <Col className="register" span={16}>
                    <div className="ex">
                        <h1 className="title-3">Daftar</h1>
                        <p className="des">
                            Sebuah tujuan akhir bagi anda untuk menemukan desainer terbaik indonesia, dan bekerja dengan mereka.
                    </p>
                    </div>
                    <Form layout="vertical" onSubmit={this.handleSubmit} className="register-wrap">
                        <Form.Item label="Nama" {...formItemLayout} >
                            {getFieldDecorator('nama', {
                                rules: [{ required: true, message: 'Namamu terlewat, tolong diisi ya' }],
                            })(<Input placeholder="desainin company" type="text" />)}
                        </Form.Item>
                        <Form.Item label="Email" {...formItemLayout} >
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Alamat emailmu terlewat, tolong diisi ya' }],
                            })(<Input placeholder="improudtodesign@mail.com" type="email" />)}
                        </Form.Item>
                        <Form.Item label="Telepon" {...formItemLayout} >
                            {getFieldDecorator('phone_number', {
                                rules: [{ required: true, message: 'Teleponmu terlewat, tolong diisi ya' }]
                            })(<Input placeholder="08231789182" type="number" minLength="10" />)}
                        </Form.Item>
                        <Form.Item label="Password" {...formItemLayout} >
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Kata sandi untuk keamananmu, jangan terlewat' }, {
                                    validator: this.validateToNextPassword
                                }],
                            })(<Input.Password placeholder="Masukkan kata sandi" minLength="8" />)}
                        </Form.Item>
                        <Form.Item label="Konfirmasi Password" {...formItemLayout} >
                            {getFieldDecorator('confirmPassword', {
                                rules: [{ required: true, message: 'password yang diberikan berbeda nih' }, {
                                    validator: this.compareToFirstPassword
                                }],
                            })(<Input.Password placeholder="Masukkan kembali kata sandi" minLength="8" />)}
                        </Form.Item>
                        <Form.Item>
                            <p>Dengan bergabung dengan kami anda akan dinyatakan setuju dengan segala<a className="link" href="/#"> kebijakan kami</a></p>
                        </Form.Item>
                        <Form.Item>
                            <Button style="button primary" text="daftar" htmlType="submit" />
                        </Form.Item>
                    </Form>
                </Col>
                <Col className="announcement" span={8}>
                    <div className="announce-content">
                        <h2 className="bigger-body">
                            Bagaimana desainer bekerja?
                        </h2>
                        <p className="regular-body">
                            Menjual jasa, mengunggah protofolio dan memberikan komentar terhadap
                            karya desainer lain <a className="link" href="/#"> membutuhkan invitasi </a> dari pengguna yang telah
                                    menjadi bagian dari komunitas kami.
                        </p>
                    </div>
                </Col>
            </Row>
        );
    }
}


const WrappedRegister = Form.create()(Register);

export default WrappedRegister;