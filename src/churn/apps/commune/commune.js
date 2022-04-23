import { React, Component } from "react";
import { Divider, Form, Grid, Header, Input, Label, Segment, Table } from "semantic-ui-react";
import LoanAndInterest from "./components/loanandinterests.js";
import CanvasJSReact from '../../../canvasjs/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Commune extends Component {
    render(){
        const options = {
            animationEnabled: true,
            title:{
                text: "Daily High Temperature at Different Beaches"
            },
            axisX: {
                valueFormatString: "DD MMM, YY"
            },
            axisY: {
                title: "Temperature (in °C)",
                suffix: " °C"
            },
            legend:{
                cursor: "pointer",
                fontSize: 16
            },
            toolTip:{
                shared: true
            },
            data: [{
                name: "Myrtle Beach",
                type: "spline",
                yValueFormatString: "#0.## °C",
                showInLegend: true,
                dataPoints: [
                    { x: new Date(2017,6,24), y: 31 },
                    { x: new Date(2017,6,25), y: 31 },
                    { x: new Date(2017,6,26), y: 29 },
                    { x: new Date(2017,6,27), y: 29 },
                    { x: new Date(2017,6,28), y: 31 },
                    { x: new Date(2017,6,29), y: 30 },
                    { x: new Date(2017,6,30), y: 29 }
                ]
            },
            {
                name: "Martha Vineyard",
                type: "spline",
                yValueFormatString: "#0.## °C",
                showInLegend: true,
                dataPoints: [
                    { x: new Date(2017,6,24), y: 20 },
                    { x: new Date(2017,6,25), y: 20 },
                    { x: new Date(2017,6,26), y: 25 },
                    { x: new Date(2017,6,27), y: 25 },
                    { x: new Date(2017,6,28), y: 25 },
                    { x: new Date(2017,6,29), y: 25 },
                    { x: new Date(2017,6,30), y: 25 }
                ]
            },
            {
                name: "Nantucket",
                type: "spline",
                yValueFormatString: "#0.## °C",
                showInLegend: true,
                dataPoints: [
                    { x: new Date(2017,6,24), y: 22 },
                    { x: new Date(2017,6,25), y: 19 },
                    { x: new Date(2017,6,26), y: 23 },
                    { x: new Date(2017,6,27), y: 24 },
                    { x: new Date(2017,6,28), y: 24 },
                    { x: new Date(2017,6,29), y: 23 },
                    { x: new Date(2017,6,30), y: 23 }
                ]
            }]
         }

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
                        <Label as="a" color="red" ribbon>Charts</Label>
                        <CanvasJSChart options = {options} />
                        
                    </Segment>
                    
                    <Segment
                        color={"purple"}
                        className="home-segment"
                    >
                        <Label as="a" color="purple" ribbon>The Room Mates</Label>
                        <Table stackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Monthly Payments</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='right'>Notes</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
    
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>TK Tang</Table.Cell>
                                    <Table.Cell>4000</Table.Cell>
                                    <Table.Cell textAlign='right'>None</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Simon Tang</Table.Cell>
                                    <Table.Cell>3500</Table.Cell>
                                    <Table.Cell textAlign='right'>Requires call</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Lauren Gaydos</Table.Cell>
                                    <Table.Cell>1000</Table.Cell>
                                    <Table.Cell textAlign='right'>None</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Segment>
                    <LoanAndInterest/>
                    <Segment
                        color={"orange"}
                        className="home-segment"
                    >
                        <Label as="a" color="orange" ribbon>Add New Member</Label>

                        <br/>
                        <br/>
                        Your partner. Your bro. Or another one who loathes the housing market. Who owns a part of the home and pays off a part of the loan.
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