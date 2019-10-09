import React, { Component, useState } from 'react';
import { Timeline, Modal, Form, Input, Icon, Popconfirm, message } from 'antd';
import '../../layouts/typography.scss';
import './stepperChat.scss';
import Axios from 'axios';

const removeStep = (val) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Axios.delete(`http://localhost:5000/transaction/2/delete/${val}`, {
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.token
                }
            })

            resolve(true);
        } catch (error) {
            console.log(error);
            reject(false);
        }
    })
}

Form.create()(StepperRender);

function StepperRender(props) {
    let [visible, setVisible] = useState(false);
    let [nama, setNamaStep] = useState(props.data.nama);
    let [persen, setPersen] = useState(props.data.persen);

    return (
        <Timeline>
            <Timeline.Item>
                <p className="regular-body-text">{props.data.nama}
                    <Modal
                        visible={visible}
                        okText={"Update Step"}
                        onCancel={() => {
                            setVisible(false);
                        }}
                        onOk={() => {
                            try {
                                Axios.put(`http://localhost:5000/transaction/2/update/${props.data.id}`, {
                                    nama: nama,
                                    persen: persen.toString()
                                }, {
                                    headers: {
                                        'content-type': 'application/json',
                                        Authorization: 'Bearer ' + localStorage.token
                                    }
                                })

                                setVisible(false);
                                window.location.reload();
                            } catch (error) {
                                console.log(error);
                            }

                        }}
                    >
                        <Form layout="vertical">
                            <Form.Item label="Nama Step">
                                <Input type="text" maxLength="100" defaultValue={nama} onChange={(data) => {
                                    setNamaStep(data.target.value);
                                    console.log(nama);
                                    console.log(persen);
                                }} />
                            </Form.Item>
                            <Form.Item label="Persen (%)">
                                <Input type="number" min="0" max="100" defaultValue={persen} onChange={(data) => {
                                    setPersen(data.target.value);
                                    console.log(nama);
                                    console.log(persen);
                                }} />
                            </Form.Item>
                        </Form>
                    </Modal>
                    <Icon type="edit" style={{ fontSize: '10pt' }} onClick={() => {
                        setVisible(true);
                    }} />

                    <Popconfirm
                        title="Apakah anda yakin ingin menghapus step ini ?"
                        onConfirm={e => {
                            e.preventDefault();
                            const isRemoveSuccess = removeStep(props.data.id);
                            if (isRemoveSuccess) {
                                message.success("Step berhasil dihapus");
                                window.location.reload();
                            } else {
                                message.error("Gagal menghapus step");
                            }
                        }}
                        onCancel={e => {
                            e.preventDefault();
                        }}
                        okText="Ya"
                        cancelText="Tidak"
                        stepId={props.data.id}>
                        <Icon type="close" style={{ fontSize: '10pt', marginTop: '1vw', float: 'right' }} />
                    </Popconfirm>
                </p>
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
                await Axios.post("http://localhost:5000/transaction/2/create", {
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
                    onOk={this.createStep}>
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
                {this.state.data ? this.state.data.map(data => <StepperRender data={data} fieldDecorator={this.props.form} />) : <h3>loading...</h3>}
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