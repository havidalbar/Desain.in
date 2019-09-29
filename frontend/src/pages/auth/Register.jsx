import React, { Component } from 'react';
import { Row, Col, Form, Input } from 'antd';
import Button from '../../components/button/Button';
import './register.scss';

const URL_SINGUP = 'http://localhost:5000/auth/signup';
class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            done: false,
            signup: false,
            errorMessage: "",
            user: {
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            },

        };
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('kata sandi harus sama yaa!');
        } else {
            callback();
        }
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
            if (!err) {
                this.setState({ errorMessage: "" });
                const body = {
                    username: values.username,
                    password: values.password
                }
                this.setState({ signup: true })
                    fetch(URL_SINGUP, {
                        method: 'POST',
                        body: JSON.stringify(body),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(response => {
                        if (response.ok) {
                            return response.json();

                        }
                        return response.json().then(error => {
                            throw new Error(error.message);
                        });
                    }).then(user => {
                        this.setState({ done: true })
                        this.setState({ signup: false })
                    }).catch(error => {
                        this.setState({ errorMessage: error.message });
                        this.setState({ signup: false })

                    });
                
            }
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
                        <Form.Item label="Username" {...formItemLayout} >
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Namamu terlewat, tolong diisi ya' }],
                            }
                            )(
                                <Input placeholder="Gunakan nama aslimu agar mudah dikenali" />)
                            }
                        </Form.Item>
                        <Form.Item label="Alamat Email" {...formItemLayout} >
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Alamat emailmu terlewat, tolong diisi ya' }],
                            }
                            )(
                                <Input placeholder="improudtodesign@mail.com" />)
                            }
                        </Form.Item>
                        <Form.Item label="Password" {...formItemLayout} >
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Kata sandi untuk keamananmu, jangan terlewat' }, {
                                    validator: this.validateToNextPassword}],
                            }
                            )(
                                <Input placeholder="Masukkan kata sandi" />)
                            }
                        </Form.Item>
                        <Form.Item label="Masukkan kembali password" {...formItemLayout} >
                            {getFieldDecorator('confirmPassword', {
                                rules: [{ required: true, message: 'password yang diberikan berbeda nih' }, {
                                    validator: this.compareToFirstPassword}],
                            }
                            )(
                                <Input placeholder="Pastikan sama ya" />)
                            }
                        </Form.Item>
                        <Form.Item>
                            <p>Dengan bergabung dengan kami anda akan dinyatakan setuju  dengan segala <a className="link" href="/#">kebijakan kami</a></p>
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