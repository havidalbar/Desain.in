import React, { Component } from 'react';
import '../../layouts/typography.scss';
import './display.scss';
import { Form, Input, Icon, Upload, message, Col, Row } from 'antd';
import Button from '../../button/Button';

const { TextArea } = Input;
const { Dragger } = Upload;
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
class UploadPortofolio extends Component {

    render() {
        const formItemLayout = "vertical";
        const { getFieldDecorator } = this.props.form;
        const text = (
            <p className="jawaban-faq">
                Saya akan mengajukan beberapa pertanyaan yang harus anda jawab. Sehingga saya dapat memahami bagaimana desain yang anda inginkan, dan yang sesuai untuk anda.</p>
        );
        return (
            <div>
                <div className="formReg">
                    <Form layout="vertical" className="create-contest">
                        <Row gutter={16}>
                            <Col span={18}>
                            <Form.Item label="Detail Konten"  {...formItemLayout}>
                                    {getFieldDecorator('konten', {
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
                                <Form.Item label="Judul"  {...formItemLayout}>
                                    {getFieldDecorator('judul', {
                                        rules: [{ required: true, message: 'Please input your judul!' }],
                                    }
                                    )(
                                        <Input placeholder="Berikan judul yang menarik" />)
                                    }
                                </Form.Item>
                                <Form.Item label="Tags"  {...formItemLayout}>
                                    {getFieldDecorator('tags', {
                                        rules: [{ required: true, message: 'Please input your tags!' }],
                                    }
                                    )(
                                        <Input placeholder="Berikan tags yang menarik" />)
                                    }
                                </Form.Item>
                                <Form.Item label="Deskripsi"  {...formItemLayout}>
                                    {getFieldDecorator('deskripsi', {
                                        rules: [{ required: true, message: 'Please input your description' }],
                                    }
                                    )(
                                        <TextArea />)
                                    }
                                </Form.Item>
                                <Form.Item>
                                    <Button style="button primary" text="BUAT CONTEST" htmlType="submit" onClick={this.handleSubmit} />
                                    <Button style="button primary" text="BUAT CONTEST" htmlType="submit" onClick={this.handleSubmit} />                                
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        )
    }
}

const WrappedUpload = Form.create()(UploadPortofolio);

export default WrappedUpload;
