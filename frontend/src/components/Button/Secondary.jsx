import React, { Component } from 'react';
import './button.scss';

class Secondary extends Component {
render(){
    return(
        <button className="button secondary">{this.props.text}</button>
    );
}
}

export default Secondary;