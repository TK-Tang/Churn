import { React } from "react";
import { Divider, Label, Header, Segment } from "semantic-ui-react";

function Introduction() {
    return <Segment
                color={"blue"}
                className="home-segment"
            >
                <Label as="a" color="blue" ribbon>Introduction</Label>
                <Header as="h2"color="grey">Commune: Don't play the game of life against everyone else. Play it with everyone else!</Header>
                <Divider/>
                Two full time income individuals can't afford to purchase property in Sydney nowadays.
                <br/>
                But what if it wasn't just you and your partner?  Bringing more full time income will more rapidly kill the loan.
                <br/>
                What if there was four full time income? or even six? You could afford a better place to live on top of that.
                <br/>
                <br/>
                This app helps you calculate how much more quickly you would pay off your home loan if you shared a commune home.
                <br/>
                The sooner you have a home, a community with friends and family and the sooner you can quit your job and do what you want to do!
            </Segment>;
}

export default Introduction;