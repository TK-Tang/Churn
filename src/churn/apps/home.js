import React from "react";
import { Header, Segment, Grid, Divider, Label } from "semantic-ui-react";

function Home() {
    return (
        <Grid columns={3}>
            <Grid.Column width={12}>
                <Segment
                    color={"red"}
                    className="home-segment"
                >
                    <Label as="a" color="blue" ribbon>Home</Label>
                    <Header as="h2"color="grey">Racing the rat race!</Header>
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