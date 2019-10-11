import React, { Component, useState, useEffect, Fragment } from 'react';
import { Timeline, Modal, Form, Input, Icon, Popconfirm, message, Upload } from 'antd';
import Button from '../../button/Button';
import '../../layouts/typography.scss';
import './stepperChat.scss';
import Axios from 'axios';
import jwt from 'jsonwebtoken';

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
    let [state, setState] = useState('');
    useEffect(() => {
        let decoded = jwt.decode(localStorage.token);
        setState(decoded.status);
    }, [state]);

    let [image, setImage] = useState('');
    let [submitId, setSubmitId] = useState('');
    let [visible2, setVisible2] = useState(false);
    let [visible3, setVisible3] = useState(false);
    let [confirmation, setConfirmation] = useState('');
    useEffect(() => {
        // console.log(image);
        // try {
        //     const formData = new FormData();
        //     formData.append("image", image);
        //     Axios.post(`http://localhost:5000/transaction/2/submit/${submitId}`, formData, {
        //         headers: {
        //             'content-type': 'multipart/form-data',
        //             Authorization: 'Bearer ' + localStorage.token
        //         }
        //     })
        // } catch (error) {
        //     console.log(error);
        // }
        setSubmitId(props.data.id);
    }, [visible2]);

    useEffect(() => {
        try {
            Axios.post(`localhost:5000/transaction/2/accept/${submitId}`,
                { "confirmation": confirmation }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.token
                }
            })
        } catch (error) {
            console.log(error);
        }

        setVisible3(false);
    }, [confirmation])

    function uploadImage(e, file) {
        e.preventDefault();
        const form = new FormData();
        form.append('image', file);

        try {
            Axios({
                method: 'put',
                url: `http://localhost:5000/transaction/2/submit/${submitId}`,
                data: form,
                config: {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + localStorage.token
                    }
                }
            })
        } catch (error) {
            console.log(error);
        }

    }

    const beforeUpload = (file) => {
        setImage(file);

    }

    return (
        <Timeline>

            <Timeline.Item color={props.data.status == 2 ? "green" : "blue"}>
                <p className="regular-body-text">{props.data.nama}
                    <Modal
                        visible={visible2}
                        okText={"Upload Hasil"}
                        onCancel={() => {
                            setVisible2(false);
                        }}
                        onOk={async () => {
                            try {
                                console.log(submitId);
                                await Axios.post(`http://localhost:5000/transaction/2/submit/${submitId}`,
                                    { url: image }, {
                                    headers: {
                                        'Content-Type': 'application/json',
                                        Authorization: 'Bearer ' + localStorage.token
                                    }
                                })
                                setVisible2(false);
                            }
                            catch (err) {
                                console.log(err);
                            }
                            // try {
                            //     Axios.put(`http://localhost:5000/transaction/2/update/${props.data.id}`, {
                            //         nama: nama,
                            //         persen: persen.toString()
                            //     }, {
                            //         headers: {
                            //             'content-type': 'application/json',
                            //             Authorization: 'Bearer ' + localStorage.token
                            //         }
                            //     })

                            //     setVisible(false);
                            //     window.location.reload();
                            // } catch (error) {
                            //     console.log(error);
                            // }

                        }}
                    >
                        <Form layout="vertical">
                            <Form.Item label="URL LINK UPLOAD">
                                <Input type="text" maxLength="100" defaultValue={''} onChange={(e) => {
                                    console.log(e.target.value);
                                    setImage(e.target.value);
                                }} />
                            </Form.Item>

                        </Form>

                    </Modal>

                    <Modal
                        visible={visible3}
                        okText={"Terima Hasil"}
                        cancelText={"Tolak Hasil"}
                        onCancel={() => {
                            try {
                                Axios.post(`http://localhost:5000/transaction/2/accept/${props.data.id}`,
                                    { "confirmation": "0" }, {
                                    headers: {
                                        'Content-Type': 'application/json',
                                        Authorization: 'Bearer ' + localStorage.token
                                    }
                                })
                            } catch (error) {
                                console.log(error);
                            }

                            setVisible3(false);
                        }}
                        onOk={() => {
                            try {
                                Axios.post(`http://localhost:5000/transaction/2/accept/${props.data.id}`,
                                    { "confirmation": "1" }, {
                                    headers: {
                                        'Content-Type': 'application/json',
                                        Authorization: 'Bearer ' + localStorage.token
                                    }
                                })
                            } catch (error) {
                                console.log(error);
                            }

                            setVisible3(false);
                        }}
                        width="80vh"
                    >
                        <Form layout="vertical">
                            <Form.Item label={"Hasil " + props.data.nama}>
                                <Input type="text" maxLength="100" readOnly defaultValue={props.data.image} />
                                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    {/* <Button style="button tertirary" text="Tolak Hasil"/>
                                    <Button style="button primary" text="Terima Hasil" /> */}
                                </div>
                            </Form.Item>

                        </Form>

                    </Modal>

                    <Modal
                        visible={visible}
                        okText={"Update Step"}
                        onCancel={() => {
                            setVisible(false);
                        }}
                        onOk={async () => {
                            try {
                                await Axios.put(`http://localhost:5000/transaction/2/update/${props.data.id}`, {
                                    nama: nama,
                                    persen: persen.toString()
                                }, {
                                    headers: {
                                        'content-type': 'application/json',
                                        Authorization: 'Bearer ' + localStorage.token
                                    }
                                })

                                setVisible(false);
                                await window.location.reload();
                            } catch (error) {
                                console.log(error);
                            }

                        }}
                    >
                        <Form layout="vertical">
                            <Form.Item label="Nama Step">
                                <Input type="text" maxLength="100" defaultValue={nama} onChange={(data) => {
                                    setNamaStep(data.target.value);
                                }} />
                            </Form.Item>
                            <Form.Item label="Persen (%)">
                                <Input type="number" min="0" max="100" defaultValue={persen} onChange={(data) => {
                                    setPersen(data.target.value);
                                }} />
                            </Form.Item>
                        </Form>
                    </Modal>
                    {state ? <Icon type="edit" style={{ fontSize: '10pt' }} onClick={() => {
                        setVisible(true);
                    }} /> : <Fragment />}


                    <Popconfirm
                        title="Apakah anda yakin ingin menghapus step ini ?"
                        onConfirm={async e => {
                            e.preventDefault();
                            const isRemoveSuccess = await removeStep(props.data.id);
                            if (isRemoveSuccess) {
                                message.success("Step berhasil dihapus");
                                await window.location.reload();
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
                        {state ? <Icon type="close" style={{ fontSize: '10pt', marginTop: '1vw', float: 'right' }} />
                            : <Fragment />}
                    </Popconfirm>
                </p>
                <p className="regular-body-text">Besaran biaya {props.data.persen} %</p>
                <p className="regular-body-text">{props.data.harga}</p>
                {localStorage.userStatus == 1 ? (<div onClick={() => setVisible2(true)}>
                    <Button style="primary" text="Upload Gambar" >
                    </Button>
                </div>) : props.data.image ? (<div onClick={() => setVisible3(true)}>
                    <Button style="primary" text="Lihat Hasil"></Button>
                </div>) : ('')}

            </Timeline.Item>

        </Timeline >
    )
}

class StepperChatDesigner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            visible: false,
            data: [],
            state: ''
        };
    }

    componentDidMount() {
        let decoded = jwt.decode(localStorage.token);
        this.setState({ state: decoded.status });
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
                {this.props.sisa <= 100 && this.props.sisa >= 0 && this.state.state ? <button className="button primary" btnText="Tambah Step"
                    onClick={() => {
                        this.setState({ visible: true })
                    }}>Tambah Step</button> : <p></p>}
            </div>
        )
    }
}

const wrappedStepperChat = Form.create()(StepperChatDesigner);

export default wrappedStepperChat;