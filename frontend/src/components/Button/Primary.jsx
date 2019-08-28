import React, { Component } from 'react';
import './Button.css';

class Primary extends Component {
render(){
    return(
        <button className="button-warna">{this.props.text}</button>
    );
}
}

export default Primary;