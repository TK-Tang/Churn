import { useState } from "react";
import { Input, Label, Menu, Segment } from "semantic-ui-react";
import CanvasJSReact from '../../../../canvasjs/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function hasExceededLoanLifetime(date, data)
{
    return date.getFullYear() > data.loanStartYear + data.loanLifetime;
}

function incrementDate(date) {
    if (date.getMonth() != 11) {
        var newMonth = date.getMonth() + 1;

        return new Date(date.getFullYear(), newMonth, 1);
    } else {
        var newYear = date.getFullYear() + 1;

        return new Date(newYear, 0, 1);
    }
}

function createDataPoints(data, monthlyPaymentTotal) {
    var dateCursor = new Date(data.loanStartYear, 0, 1);
    var dataPoints = [];
    let totalInterestPaid = 0;
    let monthlyInterest = data.loan * ((data.perAnnumInterest/100)/12);

    for (let loan = data.loan; loan > monthlyPaymentTotal; loan = loan + monthlyInterest)
    {
        totalInterestPaid = totalInterestPaid + monthlyInterest;
        loan = loan - monthlyPaymentTotal;
        dateCursor = incrementDate(dateCursor);
        dataPoints.push({label: dateCursor.getFullYear() + ", " + dateCursor.toLocaleString("default", { month: "short" }), y: totalInterestPaid});

        if (hasExceededLoanLifetime(dateCursor, data))
        {
            break;
        }
    }

    return dataPoints;
}

function drawLineForLowestIncomeMember(data) {
    var members = data.members.map(a => {return {...a}});
    members.sort((a, b) => a.monthlyPayment - b.monthlyPayment );

    var poorestMember = members[0];
    var monthlyPaymentTotal = poorestMember.monthlyPayment;

    var dataPoints = createDataPoints(data, monthlyPaymentTotal);

    return dataPoints;
}

function drawChartForHighestncomeMembers(data) {
    var members = data.members.map(a => {return {...a}});
    members.sort((a, b) => b.monthlyPayment - a.monthlyPayment);

    var highestIncomeMember = members[0];
    var monthlyPaymentTotal = highestIncomeMember.monthlyPayment;

    var dataPoints = createDataPoints(data, monthlyPaymentTotal);

    return dataPoints;
}

function drawChartForTopTwoMembers(data) {
    var memberOne = data.members[0];
    var memberTwo = data.members[1];
    var monthlyPaymentTotal = memberOne.monthlyPayment + memberTwo.monthlyPayment;

    var dataPoints = createDataPoints(data, monthlyPaymentTotal);

    return dataPoints;
}

function drawChartForAllMembers(data) {
    var monthlyPaymentTotal = 0;

    data.members.forEach((member) => { 
        monthlyPaymentTotal = +monthlyPaymentTotal + +member.monthlyPayment;
    });

    var dataPoints = createDataPoints(data, monthlyPaymentTotal);

    return dataPoints;
}

function InterestChart(props) {
    const [activeItem, handleItemClick] = useState("All Members");

    var data = props.data;
    var dataPoints = [];

    switch (activeItem){
        case "All Members":
            dataPoints = drawChartForAllMembers(data);
            break;
        case "Top Two":
            dataPoints = drawChartForTopTwoMembers(data);
            break;
        case "Highest Income":
            dataPoints = drawChartForHighestncomeMembers(data);
            break;
        case "Lowest Income":
            dataPoints = drawLineForLowestIncomeMember(data);
            break;
    }

    if (data.members.length > 1) {
        
    } else {
        var title = "Need at least two members!";
    }

    let options = {
        title: {
            text: title
        },
        data: [
            {
                type: "column",
                dataPoints: dataPoints
            }
        ]
    }
     
    return  <Segment
                color={"yellow"}
                className="home-segment"
            >
                <Label as="a" color="yellow" ribbon>Total Interest Paid</Label>
                <Menu pointing>
                    <Menu.Item
                        name="All Members"
                        active={activeItem === "All Members"}
                        onClick={() => handleItemClick("All Members")}
                    />
                    <Menu.Item
                        name="Top Two"
                        active={activeItem === "Top Two"}
                        onClick={() => handleItemClick("Top Two")}
                    />
                    <Menu.Item
                        name="Highest Income"
                        active={activeItem === "Highest Income"}
                        onClick={() => handleItemClick("Highest Income")}
                    />
                    <Menu.Item
                        name="Lowest Income"
                        active={activeItem === "Lowest Income"}
                        onClick={() => handleItemClick("Lowest Income")}
                    />
                </Menu>

                <Segment>
                    <CanvasJSChart options = {options} />
                </Segment>
            </Segment>
}

export default InterestChart;