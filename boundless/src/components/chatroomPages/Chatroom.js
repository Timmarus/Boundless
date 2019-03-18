import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Grid } from 'semantic-ui-react';
import {connect } from 'react-redux'

import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';
import ColorPanel from './ColorPanel/ColorPanel';



export class Chatroom extends Component {

    constructor(props) {
        super(props);

        const passedState = this.props.location.state

        this.state = {
            roomID: passedState.roomID,
			roomName: passedState.roomName,
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
        if (!this.props.profile){
            return <div />
        }
        console.log(this.props.profile);
        const { firstName }  = this.props.profile
        return (
        <div className="center" style={{height: this.state.height, display: "flex", flexDirection: "row", background:"grey"}}>

            <Messages user={firstName} roomID={this.state.roomID} roomName={this.state.roomName}/>

            <MetaPanel/>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps, null)(Chatroom)
// export default Chatroom;
