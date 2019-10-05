import React, { Component } from 'react';
import '../../layouts/typography.scss';
import './display.scss';
import { Collapse } from 'antd';


class Faq extends Component {
    render() {
        const { Panel } = Collapse;

        const text = (
            <p className="jawaban-faq">
                Saya akan mengajukan beberapa pertanyaan yang harus anda jawab. Sehingga saya dapat memahami bagaimana desain yang anda inginkan, dan yang sesuai untuk anda.</p>
        );
        return (
            <div className="display">
                <p className="title-3 title-display">
                    FAQ
                </p>
                <Collapse bordered={false} defaultActiveKey={['1']} className="title-faq">
                    <Panel style={{width: '70vw'}} header="Apa yang saya butuhkan untuk menggunakan layanan anda?" key="1">
                        {text}
                    </Panel>
                    <Panel style={{width: '70vw'}} header="Paket mana yang sebaiknya saya ambil?" key="2">
                        {text}
                    </Panel>
                    <Panel style={{width: '70vw'}} header="Apakah anda menggunakan template atau sejenisnya?" key="3">
                        {text}
                    </Panel>
                </Collapse>
            </div>
        )
    }
}

export default Faq;
