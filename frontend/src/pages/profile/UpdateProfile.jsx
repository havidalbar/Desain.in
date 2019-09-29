import React, { Component } from 'react';
import { Form, Input, Select, Col, Row } from 'antd';
import Navbar from '../../components/layouts/navbar/NavBar';
import Footer from '../../components/layouts/footer/Footer';
import Button from '../../components/button/Button';
import Deco from '../../assets/images/edit-profile.svg';
import './updateProfile.scss';
import '../../components/layouts/typography.scss';

const { TextArea } = Input;
const { Option } = Select;
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

function handleChange(value) {
    console.log(`selected ${value}`);
}


class UpdateProfle extends Component {
    state = {
        selectedItems: [],
    };

    handleChange = selectedItems => {
        this.setState({ selectedItems });
    };

    render() {
        const { selectedItems } = this.state;
        const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
        const formItemLayout = "vertical";
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Navbar/>
                <div className= "halfHero" >
                    <img className="halfHeroImage" src={Deco} ></img>
                    <Col span={16} push={2}>
                        <div className="heroContent" title-3>
                            <p className="title-3">
                            Berikesan yang menarik untuk siapa saja
                            <br></br>
                            yang melihat profilemu
                            </p>
                        </div>
                    </Col>
                </div>
                <div className="formReg">
                    <Form layout="vertical" className="update-profile">
                        <Row gutter={16}>
                            <p className="title-3">
                            Jangan ada yang terlewat ya!
                            </p>
                            <Col span={6}>
                                <p className="sub-title">
                                    Kategori
                                </p>
                            </Col>
                            <Col span={9}>
                                <Form.Item {...formItemLayout}>
                                    {getFieldDecorator('jenispekerjaan', {
                                        rules: [{ required: true, message: 'Please input your job!' }],
                                    }
                                    )(
                                        <Select placeholder="Jenis Pekerjan" defaultValue="Graphic Designer" style={{ width: 400 }} onChange={handleChange}>
                                            <Option value="jack">Graphic Designer</Option>
                                            <Option value="lucy">Content Writer</Option>
                                        </Select>)
                                    }
                                </Form.Item>
                            </Col>
                            <Col span={9}>
                                <Form.Item {...formItemLayout}>
                                    {getFieldDecorator('ekspertise', {
                                        rules: [{ required: true, message: 'Please input your ekxpertise!' }],
                                    }
                                    )(
                                        <Select placeholder="Jenis Keahlianmu" defaultValue="Graphic Designer" style={{ width: 400 }} onChange={handleChange}>
                                            <Option value="jack">Brand Identity</Option>
                                            <Option value="lucy">Illustration</Option>
                                        </Select>)
                                    }
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={9}>
                            <Col span={6}>
                                <p className="sub-title">
                                    Tag
                                </p>
                            </Col>
                            <Col span={18}>
                            <Select
                                mode="multiple"
                                placeholder=""
                                value={selectedItems}
                                onChange={this.handleChange}
                                style={{ width: '100%' }}
                            >
                                {filteredOptions.map(item => (
                                <Select.Option key={item} value={item}>
                                    {item}
                                </Select.Option>
                                ))}
                            </Select>
                            </Col>
                        </Row>
                        <Row gutter={9}>
                            <Col span={6}>
                                <p className="sub-title">
                                    Deskripsi
                                </p>
                            </Col>
                            <Col span={18}>
                                <Form.Item label="Deskripsikan Dirimu"  {...formItemLayout}>
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Please input your description' }],
                                    }
                                    )(
                                        <TextArea placeholder="Beri yang menarik tak lebih dari 400 kata" />)
                                    }
                                </Form.Item>
                            </Col>
                        </Row>
                        <Col span={6}>
                            <Form.Item>
                                <Button style="button primary" text="BUAT CONTEST" htmlType="submit" onClick={this.handleSubmit}/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                        <Form.Item>
                            <Button style="button tertirary" text="CANCEL" htmlType="reset" onClick={this.handleReset}/>
                        </Form.Item>
                        </Col>
                        
                    </Form>
                  
                </div>
                <Footer/>
            </div>
            
        )
    }
}

const WrappedCreateContest = Form.create()(UpdateProfle);
export default WrappedCreateContest;