import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

function Commune() {
    return (
        <Grid columns={3}>
            <Grid.Column width={16}>
                <div id="body-container">
                    <Segment>
                        <Label as="a" color="blue" ribbon>
                            Commune
                        </Label>
                    </Segment>
                    <Header as="h2"color="grey">Don't play the game of life against everyone else. Play it with everyone else!</Header>
                    <Divider/>
                    Two full time income can't afford to purchase a property in Sydney nowadays
                    <br/>
                    But what about four full time incomes? Or perhaps six?
                    <br/>
                    This app helps you calculate how much more quickly you would pay off your home loan if you shared a commune house.
                    <br/>
                    The sooner you have a place to call home with life-long friends, the sooner your are free from the rat race!
                </div>
            </Grid.Column>
        </Grid>
    );
}

export default Commune;