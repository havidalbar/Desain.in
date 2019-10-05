import React, { Component } from 'react';
import { Timeline, Modal, Form, Input } from 'antd';
import Button from '../../button/ButtonAntd';
import '../../layouts/typography.scss';
import './stepperChat.scss';

// eslint-disable-next-line

// class extends Component {
//     render() {
//         return(
//                 )
//     }
// }

class StepperChatDesigner extends Component {

    state = {
        loading: false,
        visible: false,
    };
    
    render() {
        return(
            <div className="stepper">
                <Timeline>
                    <Timeline.Item>
                        <p className="regular-body-text">{this.props.titleStep}</p>
                        <p className="regular-body-text">Besaran biaya {this.props.persen}</p>
                        <p className="regular-body-text">{this.props.biaya}</p>
                    </Timeline.Item>
                    <Button style="button primary" text="TAMBAHKAN STEP" onClick={this.showModal}/>
                </Timeline>
                
            </div>
        )
    }
}

export default StepperChatDesigner;