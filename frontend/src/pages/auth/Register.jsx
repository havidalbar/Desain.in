import React, { Component } from 'react';
import { Row, Col, Form, Input } from 'antd';
import Button from '../../components/button/Button';
import './register.scss';

class Register extends Component {
    
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

        return(
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
                                    rules: [{ required:true, message: 'Namamu terlewat, tolong diisi ya' }],
                                    }
                                    )(
                                    <Input placeholder="Gunakan nama aslimu agar mudah dikenali" />,)
                            }
                        </Form.Item>
                        <Form.Item label="Alamat Email" {...formItemLayout} >
                            {getFieldDecorator('email', { 
                                    rules: [{ required:true, message: 'Alamat emailmu terlewat, tolong diisi ya' }],
                                    }
                                    )(
                                    <Input placeholder="improudtodesign@mail.com" />,)
                            }
                        </Form.Item>
                        <Form.Item label="Password" {...formItemLayout} >
                            {getFieldDecorator('password', { 
                                    rules: [{ required:true, message: 'Kata sandi untuk keamananmu, jangan terlewat' }],
                                    }
                                    )(
                                    <Input placeholder="Masukkan kata sandi" />,)
                            }
                        </Form.Item>
                        <Form.Item label="Masukkan kembali password" {...formItemLayout} >
                            {getFieldDecorator('username', { 
                                    rules: [{ required:true, message: 'password yang diberikan berbeda nih' }],
                                    }
                                    )(
                                    <Input placeholder="Pastikan sama ya" />,)
                            }
                        </Form.Item>
                        <Form.Item>
                            <p>Dengan bergabung dengan kami anda akan dinyatakan setuju  dengan segala <a className="link" href="">kebijakan kami</a></p>
                        </Form.Item>
                        <Form.Item>
                            <Button style="button primary" text="daftar"  htmlType="submit"/>
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
                            karya desainer lain <a className="link" href=""> membutuhkan invitasi </a> dari pengguna yang telah 
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