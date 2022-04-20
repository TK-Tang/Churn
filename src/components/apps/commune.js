import { React, Component } from "react";
import { Divider, Grid, Header, Input, Label, Segment, Table } from "semantic-ui-react";

export default class Commune extends Component {
    render(){
        return (
            <Grid columns={3}>
                <Grid.Column width={12}>
                    <Segment
                        color={"blue"}
                        className="home-segment"
                    >
                        <Label as="a" color="blue" ribbon>Introduction</Label>
                        <Header as="h2"color="grey">Don't play the game of life against everyone else. Play it with everyone else!</Header>
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
    
    
                    </Segment>
    
                    <Segment
                        color={"red"}
                        className="home-segment"
                    >
                        <Label as="a" color="red" ribbon>Chart</Label>
                        <Table stackable>
                            <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                                <Table.HeaderCell textAlign='right'>Notes</Table.HeaderCell>
                            </Table.Row>
                            </Table.Header>
    
                            <Table.Body>
                            <Table.Row>
                                <Table.Cell>John</Table.Cell>
                                <Table.Cell>Approved</Table.Cell>
                                <Table.Cell textAlign='right'>None</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Jamie</Table.Cell>
                                <Table.Cell>Approved</Table.Cell>
                                <Table.Cell textAlign='right'>Requires call</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Jill</Table.Cell>
                                <Table.Cell>Denied</Table.Cell>
                                <Table.Cell textAlign='right'>None</Table.Cell>
                            </Table.Row>
                            </Table.Body>
                        </Table>
                    </Segment>
                    <Segment
                        color={"green"}
                        className="home-segment"
                    >
                        <Label as="a" color="green" ribbon>Loan and Interest</Label>

                        <br/>
                        <br/>
                        The loan you take to buy your place and the parasitic interest rate.
                        <br/>
                        <br/>

                        <Input labelPosition='right' type='text' placeholder='Loan'>
                            <Label basic>$</Label>
                            <input />
                            <Label>.00</Label>
                        </Input>
                        <Input labelPosition='right' type='text' placeholder='Per Annum Interest'>
                            <Label basic>$</Label>
                            <input />
                            <Label>%</Label>
                        </Input>
                    </Segment>
                    <Segment
                        color={"purple"}
                        className="home-segment"
                    >
                        <Label as="a" color="purple" ribbon>The Squad</Label>

                        <br/>
                        <br/>
                        Your partner. Your bro. Whoever is in the squad to see this through.
                        <br/>
                        <br/>

                        <Input labelPosition='right' type='text' placeholder='Amount'>
                            <Label basic>$</Label>
                            <input />
                            <Label>.00</Label>
                        </Input>
                    </Segment>
                    <Segment
                        color={"orange"}
                        className="home-segment"
                    >
                        <Label as="a" color="orange" ribbon>The Squad</Label>

                        <br/>
                        <br/>
                        Your partner. Your bro. Whoever is in the squad to see this through.
                        <br/>
                        <br/>

                        <Input
                            label={{ icon: "user" }}
                            labelPosition="right corner"
                            placeholder="Name"
                        />
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}