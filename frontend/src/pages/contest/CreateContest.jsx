import React, { Component, Fragment } from 'react';
import { Form, Input, InputNumber, Icon, Upload, Select, DatePicker, message, Col, Row } from 'antd';
import Navbar from '../../components/layouts/navbar/NavBar';
import Footer from '../../components/layouts/footer/Footer';
import Button from '../../components/button/Button';
import Deco from '../../assets/images/contest-reg.svg';
import './createContest.scss';
import '../../components/layouts/typography.scss';

const { TextArea } = Input;
const { Dragger } = Upload;
const { RangePicker } = DatePicker;
const { Option } = Select;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

function onChange(date, dateString) {
    console.log(date, dateString);
}

function handleChange(value) {
    console.log(`selected ${value}`);
}

function onNumberChange(value) {
    console.log('changed', value);
}

class CreateContest extends Component {


    render() {
        const formItemLayout = "vertical";
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Navbar />
                <div className="halfHero" >
                    <img className="halfHeroImage" src={Deco} ></img>
                    <Col span={16} push={8}>
                        <div className="heroContent" title-3>
                            <p className="title-3">
                                Lengkapi formulir dibawah
                            <br></br>
                                dan mulai kontesmu!
                            </p>
                        </div>
                    </Col>
                </div>
                <div className="formReg">
                    <Form layout="vertical" className="create-contest">
                        <Row gutter={16}>
                            <Col span={6}>
                                <p className="sub-title">
                                    Informasi Umum
                                </p>
                            </Col>
                            <Col span={18}>
                                <Form.Item label="Nama Konten"  {...formItemLayout}>
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Please input your email!' }],
                                    }
                                    )(
                                        <Input placeholder="improudtodesign@mail.com" />)
                                    }
                                </Form.Item>
                                <Form.Item label="Deskripsikan Kontesmu"  {...formItemLayout}>
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Please input your description' }],
                                    }
                                    )(
                                        <TextArea />)
                                    }
                                </Form.Item>
                                <Form.Item label="Detail Konten"  {...formItemLayout}>
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Please upload any detail file' }],
                                    }
                                    )(
                                        <Dragger {...props}>
                                            <p className="ant-upload-drag-icon">
                                                <Icon type="inbox" style={{ color: '#0020da' }} />
                                            </p>
                                            <p className="ant-upload-text">
                                                Click or drag file to this area to upload
                                            </p>
                                            <p className="ant-upload-hint">
                                                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                                band files
                                            </p>
                                        </Dragger>)
                                    }
                                </Form.Item>
                                <Form.Item label="Kapan Kontesmu Dilaksanakan"  {...formItemLayout}>
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Please set your contest date!' }],
                                    }
                                    )(
                                        <RangePicker onChange={onChange} />)
                                    }
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={6}>
                                <p className="sub-title">
                                    Detail Pekerjaan
                                </p>
                            </Col>
                            <Col span={18}>
                                <Form.Item label="Kategori Badan Usaha"  {...formItemLayout}>
                                    {getFieldDecorator('badanusaha', {
                                        rules: [{ required: true, message: 'Please input your business category!' }],
                                    }
                                    )(
                                        <Select placeholder="Pilih dari yang tersedia" defaultValue="lucy" style={{ width: 500 }} onChange={handleChange}>
                                            <Option value="jack">Perorangan</Option>
                                            <Option value="lucy">Bisnis Swasta</Option>
                                            <Option value="disabled">Badan Pemerintahan</Option>
                                        </Select>)
                                    }
                                </Form.Item>
                                <Form.Item label="Kategori Badan Usaha"  {...formItemLayout}>
                                    {getFieldDecorator('pekerjaan', {
                                        rules: [{ required: true, message: 'Please input your business category!' }],
                                    }
                                    )(
                                        <Select placeholder="Pilih dari yang tersedia" defaultValue="lucy" style={{ width: 400 }} onChange={handleChange}>
                                            <Option value="jack">Perorangan</Option>
                                            <Option value="lucy">Bisnis Swasta</Option>
                                            <Option value="disabled">Badan Pemerintahan</Option>
                                        </Select>)
                                    }
                                </Form.Item>
                                <Form.Item label="Berikan catatan khusus"  {...formItemLayout}>
                                    {getFieldDecorator('catatan', {
                                        rules: [{ required: true, message: 'Please input your description' }],
                                    }
                                    )(
                                        <TextArea />)
                                    }
                                </Form.Item>
                                <Form.Item label="Unggah Lampiran"  {...formItemLayout}>
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Please upload any detail file' }],
                                    }
                                    )(
                                        <Dragger {...props}>
                                            <p className="ant-upload-drag-icon">
                                                <Icon type="inbox" style={{ color: '#0020da' }} />
                                            </p>
                                            <p className="ant-upload-text">
                                                Click or drag file to this area to upload
                                            </p>
                                            <p className="ant-upload-hint">
                                                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                                band files
                                            </p>
                                        </Dragger>)
                                    }
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={6}>
                                Detail Pembayaran
                            </Col>
                            <Col span={18}>
                                <Form.Item label="Jenis Pembayaran"  {...formItemLayout}>
                                    {getFieldDecorator('hadiah', {
                                        rules: [{ required: true, message: 'Please input your business category!' }],
                                    }
                                    )(
                                        <Select placeholder="Pilih dari yang tersedia" defaultValue="lucy" style={{ width: 400 }} onChange={handleChange}>
                                            <Option value="jack">Elektronik</Option>
                                            <Option value="lucy">Tunai</Option>
                                        </Select>)
                                    }
                                </Form.Item>
                                <Form.Item label="Besaaran Hadiah"  {...formItemLayout}>
                                    {getFieldDecorator('hadia', {
                                        rules: [{ required: true, message: 'Please input your email!' }],
                                    }
                                    )(
                                        <InputNumber
                                            style={{ width: 300 }}
                                            defaultValue={0}
                                            formatter={value => `Rp. ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                                            parser={value => value.replace(/\Rp.\s?|(,*)/g, '')}
                                            onChange={onNumberChange}
                                        />)
                                    }
                                </Form.Item>
                                <Form.Item>
                                    <Button style="button primary" text="BUAT CONTEST" htmlType="submit" onClick={this.handleSubmit} />
                                </Form.Item>
                            </Col>
                        </Row>


                    </Form>
                </div>
                <Footer />
            </div>
        );
    };
}

const WrappedCreateContest = Form.create()(CreateContest);

export default WrappedCreateContest;