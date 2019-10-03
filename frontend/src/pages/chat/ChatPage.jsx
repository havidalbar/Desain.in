import React, { Component } from 'react';
import { Col } from 'antd';
import { Row, ThemeProvider, TextComposer, IconButton, AddIcon, TextInput, SendButton } from '@livechat/ui-kit'
import Navbar from '../../components/layouts/navbar/NavBar';
import AvatarDetail from '../../components/avatar-detail/AvatarDetail';
import StepDesigner from '../../components/layouts/chat-layout/StepperChatDesigner';
import './chatPage.scss';
import '../../components/layouts/typography.scss';

class ChatPage extends Component {

    render() {
        return(
            <div>
                <Navbar/>
                <div className="chat-page">
                    <Row gutter={2}>
                        <Col span={16}>
                            <div className="chat-section">
                                <div className="chat-bubble">

                                </div>
                                <ThemeProvider>
                                    <TextComposer>
                                        <Row align="center">
                                            <TextInput fill />
                                            <SendButton fit />
                                        </Row>

                                        <Row verticalAlign="center" justify="right">
                                            <IconButton fit>
                                            </IconButton>
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
                                <AvatarDetail title="Tony Hurella" meta="mendapat invitasi"/>
                                <p className="bigger-body-text">
                                    Progress Pekerjaan
                                </p>
                                <div className="display-step">
                                    <StepDesigner titleName="design brief" persen="30%" biaya="90.000"/>
                                </div>
                                <p className="bigger-body-text">
                                    Total nilai proyek
                                    <br/>
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