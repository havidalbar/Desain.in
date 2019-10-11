import React, { Component } from 'react';
import { Col } from 'antd';
import { Row, ThemeProvider, TextComposer, MessageGroup, Message, TextInput, SendButton, MessageText } from '@livechat/ui-kit'

import Navbar from '../../components/layouts/navbar/NavBar';
import AvatarDetail from '../../components/avatar-detail/AvatarDetail';
import StepDesigner from '../../components/layouts/chat-layout/StepperChatDesigner';
import './chatPage.scss';
import '../../components/layouts/typography.scss';

import Socket from 'socket.io-client';
import jwt from 'jsonwebtoken';
import ChatBubble from '../../components/ChatBubble';
import Axios from 'axios';

class RenderChat extends Component {

    render() {
        let decoded = jwt.decode(localStorage.token);
        let who = 'me'
        if (this.props.data.from != decoded.userName) {
            who = 'you'
        }

        return (

            <div className={`bubble-container ${who}`} >
                <p>{this.props.nama}</p>
                <div className={`bubble ${who}`}>{this.props.data.chat}</div>
            </div>

        )
    }
}

class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            chat: '',
            transaction: {},
            sisa: 0,
            user: {}
        }
        this.sendChat = this.sendChat.bind(this);
    }

    loadTransactionStep = async () => {
        try {
            const { data } = await Axios.get('http://localhost:5000/transaction/detail/2', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.token
                },
            })
            this.setState({ transaction: data.transactionDetail });

            let { step } = this.state.transaction;
            let stepPersen = 0;
            step.map(s => stepPersen += s.persen);
            this.setState({ sisa: (100 - stepPersen) });
            console.log(data.transactionDetail.id_desainer);
            const url = `http://localhost:5000/user/profile/${data.transactionDetail.id_desainer}`;
            const dataUser = await Axios.get(url);
            this.setState({ user: dataUser.data.user });
        } catch (error) {
            console.log(error);
        }
    }


    sendChat(chat) {
        let decoded = jwt.decode(localStorage.token);
        const endPoint = 'http://localhost:250';
        const socket = Socket(endPoint);
        const data = {
            from: decoded.userName,
            chat: chat
        }
        socket.emit('sendMessage', data);
        socket.on('chat', (data) => {
            this.setState({ data: data });
        });
    }


    componentDidMount() {
        this.loadTransactionStep();
        const endPoint = 'http://localhost:250';
        const socket = Socket(endPoint);
        socket.on('chat', (data) => {
            this.setState({ data: data });
        })
        setInterval(() => {
            socket.on('chat', (data) => {
                this.setState({ data: data });
            })
        }, 1000);
    }


    render() {
        return (
            <div>
                <Navbar />
                <div className="chat-page">
                    <Row gutter={2}>
                        <Col span={16}>
                            <div className="chat-section">
                                {this.state.data.map(data => {
                                    return (
                                        <RenderChat data={data} />
                                    )
                                })}
                                <ThemeProvider>
                                    <TextComposer onChange={(data) => {
                                        this.setState({ chat: data.target.value });
                                    }} onSend={(data) => {
                                        this.sendChat(data);
                                    }}>
                                        <Row align="center">
                                            <TextInput fill />
                                            <SendButton onClick={() => {
                                            }} />
                                        </Row>
                                    </TextComposer>
                                </ThemeProvider>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="step-view">
                                <p className="sub-title">
                                    Designer info
                                </p>
                                <AvatarDetail title={this.state.user.nama} meta="mendapat invitasi" />
                                <p className="bigger-body-text">
                                    Progress Pekerjaan
                                </p>
                                <div className="display-step">
                                    <StepDesigner step={this.state.transaction.step} sisa={this.state.sisa} />
                                    {/* titleName="design brief" persen="30%" biaya="90.000" */}
                                </div>
                                <p className="bigger-body-text">
                                    Total nilai proyek
                                    <br />
                                    {this.state.transaction.harga}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

}

export default ChatPage;