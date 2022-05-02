import React from "react";
import { Label, Segment } from "semantic-ui-react";
import CanvasJSReact from '../../../../canvasjs/canvasjs.react';
import CommuneContext from "../commune-context.js";
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

    for (let loan = data.loan; loan > monthlyPaymentTotal; loan = loan + (loan * ((data.perAnnumInterest/100)/12)))
    {
        loan = loan - monthlyPaymentTotal;
        dateCursor = incrementDate(dateCursor);
        dataPoints.push({x: dateCursor, y: Math.round(loan)});

        if (hasExceededLoanLifetime(dateCursor, data))
        {
            break;
        }
    }

    return dataPoints.reverse();
}

function drawLineForAllMembers(data) {
    var monthlyPaymentTotal = 0;

    data.members.forEach((member) => { 
        monthlyPaymentTotal = +monthlyPaymentTotal + +member.monthlyPayment;
    });

    var dataPoints = createDataPoints(data, monthlyPaymentTotal);

    return {
        name: "All Members"  + "($" + monthlyPaymentTotal + ")",
        type: "spline",
        yValueFormatString: "$ #0.##",
        showInLegend: true,
        dataPoints: dataPoints
    }
}

function drawLineForHighestIncomeMember(data) {
    var members = data.members.map(a => {return {...a}});
    members.sort((a, b) => b.monthlyPayment - a.monthlyPayment);

    var highestIncomeMember = members[0];
    var monthlyPaymentTotal = highestIncomeMember.monthlyPayment;

    var dataPoints = createDataPoints(data, monthlyPaymentTotal);

    return {
        name: highestIncomeMember.name + " (Highest Income: $" + monthlyPaymentTotal + ")",
        type: "spline",
        yValueFormatString: "$ #0.##",
        showInLegend: true,
        dataPoints: dataPoints
    }
}

function drawLineForLowestIncomeMember(data) {
    var members = data.members.map(a => {return {...a}});
    members.sort((a, b) => a.monthlyPayment - b.monthlyPayment );
    var poorestMember = members[0];

    var monthlyPaymentTotal = poorestMember.monthlyPayment;

    var dataPoints = createDataPoints(data, monthlyPaymentTotal);

    return {
        name: poorestMember.name + " (Lowest Income: $" + monthlyPaymentTotal + ")",
        type: "spline",
        yValueFormatString: "$ #0.##",
        showInLegend: true,
        dataPoints: dataPoints
    }
}

function drawLineForTopTwoMembers(data) {
    var memberOne = data.members[0];
    var memberTwo = data.members[1];
    var monthlyPaymentTotal = memberOne.monthlyPayment + memberTwo.monthlyPayment;

    var dataPoints = createDataPoints(data, monthlyPaymentTotal);

    return {
        name: memberOne.name + " & " + memberTwo.name + "($" + monthlyPaymentTotal + ")",
        type: "spline",
        yValueFormatString: "$ #0.##",
        showInLegend: true,
        dataPoints: dataPoints
    }
}

function LineGraph(props) {
    var title = "Loan Graph";
    var data = props.data;
    var lines = [];

    if (data.members.length > 1) {
        var lineForHighestIncomeMember = drawLineForHighestIncomeMember(data);
        var lineForLowestIncomeMember = drawLineForLowestIncomeMember(data);
        var lineForTopTwoMembers = drawLineForTopTwoMembers(data);
        var lineForAllMembers = drawLineForAllMembers(data);

        lines.push(lineForHighestIncomeMember);
        lines.push(lineForLowestIncomeMember);
        lines.push(lineForTopTwoMembers);
        lines.push(lineForAllMembers);
    } else {
        title = "Need at least two members!";
    }

    let options = {
        animationEnabled: true,
        title:{
            text: title
        },
        axisX: {
            valueFormatString: "MMM, YYYY"
        },
        axisY: {
            title: "Debt",
            suffix: " $"
        },
        legend:{
            cursor: "pointer",
            fontSize: 16
        },
        toolTip:{
            shared: true
        },
        data: lines
     }
     
    return  <Segment
                color={"red"}
                className="home-segment"
            >
                <Label as="a" color="red" ribbon>Charts</Label>
                <CanvasJSChart options={options} />

                <CommuneContext.Consumer>
                {
                    ({loan, loanStartYear, loanLifetime, perAnnumInterest}) => (
                        <React.Fragment>
                            <br/>
                            <br/>
                            The graph displays the lifetime of the loan, which is ${loan.toLocaleString()} total.
                            <br/>
                            It begins in {loanStartYear}, lasting for {loanLifetime} years at a yearly interest of {perAnnumInterest}%.
                            <br/>

                            Type out the loan end dates here
                        </React.Fragment>
                    )
                }
            </CommuneContext.Consumer>
            </Segment>
}

export default LineGraph;