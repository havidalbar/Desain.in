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

function StepperRender(props) {
    return (
        <Timeline>
            <Timeline.Item>
                <p className="regular-body-text">{props.data.nama}</p>
                <p className="regular-body-text">Besaran biaya {props.data.persen}</p>
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

    componentWillReceiveProps() {
        this.setState({ data: this.props.step });
        console.log(this.props.step);
    }

    render() {
        return (
            <div className="stepper">
                {this.state.data ? this.state.data.map(data => <StepperRender data={data} />) : <h3>loading...</h3>}
                {this.props.sisa <= 100 && this.props.sisa >= 0 ? <Button style="button primary" text="TAMBAHKAN STEP" onClick={this.showModal} /> : <p></p>}
            </div>
        )
    }
}

export default StepperChatDesigner;