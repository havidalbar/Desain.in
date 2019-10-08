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



class RenderChat extends Component {



    render() {
        let who = 'me'
        if (this.props.data.from != 'Adam Asa') {
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
            chat: ''
        }
        this.sendChat = this.sendChat.bind(this);
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
        const endPoint = 'http://localhost:250';
        const socket = Socket(endPoint);
        socket.on('chat', (data) => {
            this.setState({ data: data });
            console.log(data);
        });
        socket.open();  

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
                                <AvatarDetail title="Tony Hurella" meta="mendapat invitasi" />
                                <p className="bigger-body-text">
                                    Progress Pekerjaan
                                </p>
                                <div className="display-step">
                                    <StepDesigner titleName="design brief" persen="30%" biaya="90.000" />
                                </div>
                                <p className="bigger-body-text">
                                    Total nilai proyek
                                    <br />
                                    Rp. 300.0000
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