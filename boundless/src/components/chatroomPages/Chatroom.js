import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Messages from './Messages/Messages';

import MetaPanel from './MetaPanel/MetaPanel';

import ColorPanel from './ColorPanel/ColorPanel';

import { Grid } from 'semantic-ui-react';


export class Chatroom extends Component {

    constructor(props) {
        super(props);

        const passedState = this.props.location.state

        this.state = {
            roomID: passedState.roomID,

            width: 0,
            height: 0,
        }


    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        return (
        <div className="center" style={{height: this.state.height, display: "flex", flexDirection: "row", background:"grey"}}>

            <Messages roomID={this.state.roomID}/>

            <MetaPanel/>
        </div>
        );
    }
}

export default Chatroom;
