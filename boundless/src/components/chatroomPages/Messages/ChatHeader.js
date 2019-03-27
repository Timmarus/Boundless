import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../actions/chatActions'
import { Header, Segment, Icon, Input, Form } from 'semantic-ui-react'

class ChatHeader extends React.Component {
    /**
     * On search, we will get rid of the chatForm, and display messages, with the search result highlighted
     */

     state = {
        searchText: ''
    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
        
    }

    handleSearch = () => {

        const msgs = this.props.messages
        var msgFilter = []
        
        for (var i = 0; i < msgs.length; i ++){
            if (msgs[i].msg.includes(this.state.searchText)){
                msgFilter.push(msgs[i])
            }
        }
    
        const text = {msgs: msgFilter ,searchEnable: 1}
        this.props.searchMsgs(text)
        
    }

    render() {
	    console.log("RoomID", this.props.roomID)
        return (


            <Segment 
                clearing 
                style={{background: "#eeee", display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>

                {/* Course Room Title Here */}
                <Header fluid="true" as="h2" style={{marginBottom: 0, }}>
                        Course ID: {this.props.roomID}
                </Header>

                <Form onSubmit={this.handleSearch}>
                    <Input 
                        onChange={this.handleChange}
                        action='Search' 
                        placeholder='Search...' />
                </Form>
                
            </Segment>
            
        )

    }
}

export default connect(null, actions)(ChatHeader)