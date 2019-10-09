import React, { Component } from 'react';
import { Timeline, Modal, Form, Input, Icon } from 'antd';
import Button from '../../button/ButtonAntd';
import '../../layouts/typography.scss';
import './stepperChat.scss';
import Axios from 'axios';

function StepperRender(props) {
    return (
        <Timeline>
            <Timeline.Item>
                <p className="regular-body-text">{props.data.nama}
                    <Icon type="edit" style={{ fontSize: '10pt' }} />
                    <Icon type="close" style={{ fontSize: '10pt', marginTop: '1vw', float: 'right' }} /> </p>
                <p className="regular-body-text">Besaran biaya {props.data.persen} %</p>
                <p className="regular-body-text">{props.data.harga}</p>
            </Timeline.Item>
        </Timeline>
    )
}

class StepperChatDesigner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            visible: false,
            data: []
        };
    }

    createStep = e => {
        e.preventDefault();

        this.props.form.validateFields(async (err, values) => {
            if (err) { return; }

            console.log(values);

            try {
                const insertStep = await Axios.post("http://localhost:5000/transaction/2/create", {
                    "nama": values.Nama,
                    "persen": values.Persen
                }, {
                    headers: {
                        'content-type': 'application/json',
                        Authorization: 'Bearer ' + localStorage.token
                    }
                })

                this.setState({ visible: false });
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        })
    }

    componentWillReceiveProps() {
        this.setState({ data: this.props.step });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="stepper">
                <Modal
                    visible={this.state.visible}
                    okText={this.props.btnText}
                    onCancel={() => {
                        this.setState({ visible: false })
                    }}
                    onOk={this.createStep}
                >
                    <Form layout="vertical">
                        <Form.Item label="Nama Step">
                            {getFieldDecorator('Nama', {
                                rules: [{ required: true, message: 'Tolong masukkan nama step' }],
                            })(<Input type="text" maxLength="100" />)}
                        </Form.Item>
                        <Form.Item label="Persen (%)">
                            {getFieldDecorator('Persen', {
                                rules: [{ required: true, message: 'Tolong masukkan persen step' }]
                            })(<Input type="number" min="0" max="100" />)}
                        </Form.Item>
                    </Form>
                </Modal>
                {this.state.data ? this.state.data.map(data => <StepperRender data={data} />) : <h3>loading...</h3>}
                {this.props.sisa <= 100 && this.props.sisa >= 0 ? <button className="button primary" btnText="Tambah Step"
                    onClick={() => {
                        this.setState({ visible: true })
                    }}>Tambah Step</button> : <p></p>}
            </div>
        )
    }
}

const wrappedStepperChat = Form.create()(StepperChatDesigner);

export default wrappedStepperChat;