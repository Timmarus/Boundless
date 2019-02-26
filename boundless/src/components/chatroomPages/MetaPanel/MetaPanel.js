import React from 'react';

import { Header, Segment, Icon, Input } from 'semantic-ui-react'


class MetaPanel extends React.Component {
    render () {
        return (
            // <div> Metapanel 


                
            <div style={{display: "flex", flexDirection: "column", width: "20%"}}>

                

<               Header fluid as="h2" floated="left" style={{display: "flex", flexDirection: "column", padding: "0.5em"}}>
                {/* <span> */}

                    {/* Course Name here */}

                    User List Here

                    <Header.Subheader>
                    
                    # Users in this room: 
                    </Header.Subheader>
                {/* </span> */}
                </Header>

                <Segment clearing style={{background: "	#696969", margin: 0, height: "100%"}}>

                {/* Course Room Title Here */}


                </Segment>

            </div>

        )
    }
}

export default MetaPanel;