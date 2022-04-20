import React from "react";
import {Container, Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

function Home() {
    return (
        <Grid columns={3}>
            <Grid.Column width={16}>
                    
                    <Segment
                        color={"red"}
                        padded={"very"}
                        className="segment"
                    >
                        
                        <Header as="h2"color="grey">Racing the rat race!</Header>
                        <Label as="a" color="blue" ribbon>
                            Home
                        </Label>
                        <Divider/>
                        This is a collection of varius small apps to help calculate finances.
                        <br/>
                        Because the ones provided by banks are just garbage!
                    </Segment>
            </Grid.Column>
        </Grid>
    );
}

export default Home;