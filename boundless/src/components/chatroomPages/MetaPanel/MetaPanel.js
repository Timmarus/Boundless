import React from 'react';

import { Header, Segment, Icon, Input } from 'semantic-ui-react'


class MetaPanel extends React.Component {
    render () {
        return (
            // <div> Metapanel 


                
            <div style={{display: "flex", flexDirection: "column", width: "100%"}}>

                

<               Header fluid as="h2" floated="left" style={{display: "flex", flexDirection: "column"}}>
                {/* <span> */}

                    {/* Course Name here */}

                    User List Here

                    <Header.Subheader>
                    
                    # Users in this room: 
                    </Header.Subheader>
                {/* </span> */}
                </Header>

            </div>

        )
    }
}

export default MetaPanel;