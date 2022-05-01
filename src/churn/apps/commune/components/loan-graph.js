import { React } from "react";
import { Label, Segment } from "semantic-ui-react";
import CanvasJSReact from '../../../../canvasjs/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function incrementDate(date) {
    if (date.getMonth() != 11) {
        var newMonth = date.getMonth() + 1;

        return new Date(date.getFullYear(), newMonth, 1);
    } else {
        var newYear = date.getFullYear() + 1;

        return new Date(newYear, 0, 1);
    }
}

function hasExceededLoanLifetime(date, data)
{
    return date.getFullYear() > data.loanStartYear + data.loanLifetime;
}

function createDataPoints(data, monthlyPaymentTotal) {
    var dateCursor = new Date(data.loanStartYear, 0, 1);
    var dataPoints = [];

    for (let loan = data.loan; loan > monthlyPaymentTotal; loan = loan + (loan * ((data.perAnnumInterest/100)/12)))
    {
        loan = loan - monthlyPaymentTotal;
        dateCursor = incrementDate(dateCursor);
        dataPoints.push({x: dateCursor, y: loan});

        if (hasExceededLoanLifetime(dateCursor, data))
        {
            break;
        }
    }

    dataPoints.reverse();
    return dataPoints;
}

function drawLineForAllMembers(data) {
    var monthlyPaymentTotal = 0;

    data.members.forEach((member) => { 
        monthlyPaymentTotal = +monthlyPaymentTotal + +member.monthlyPayment;
    });

    var dataPoints = createDataPoints(data, monthlyPaymentTotal);

    var x = {
        name: "All Members"  + "($" + monthlyPaymentTotal + ")",
        type: "spline",
        yValueFormatString: "$ #0.##",
        showInLegend: true,
        dataPoints: dataPoints
    }

    return x;
}

function drawLineForRichestMember(data) {
    var members = data.members.map(a => {return {...a}});
    members.sort((a, b) => b.monthlyPayment - a.monthlyPayment);

    var richestMember = members[0];
    var monthlyPaymentTotal = richestMember.monthlyPayment;

    var dataPoints = createDataPoints(data, monthlyPaymentTotal);

    var x = {
        name: richestMember.name + " (Highest Income: $" + monthlyPaymentTotal + ")",
        type: "spline",
        yValueFormatString: "$ #0.##",
        showInLegend: true,
        dataPoints: dataPoints
    }

    return x;
}

function drawLineForPoorestMember(data) {
    var members = data.members.map(a => {return {...a}});
    members.sort((a, b) => a.monthlyPayment - b.monthlyPayment );
    var poorestMember = members[0];

    var monthlyPaymentTotal = poorestMember.monthlyPayment;

    var dataPoints = createDataPoints(data, monthlyPaymentTotal);

    var x = {
        name: poorestMember.name + " (Lowest Income: $" + monthlyPaymentTotal + ")",
        type: "spline",
        yValueFormatString: "$ #0.##",
        showInLegend: true,
        dataPoints: dataPoints
    }

    return x;
}

function drawLineForTopTwoMembers(data) {
    var memberOne = data.members[0];
    var memberTwo = data.members[1];
    var monthlyPaymentTotal = memberOne.monthlyPayment + memberTwo.monthlyPayment;

    var dataPoints = createDataPoints(data, monthlyPaymentTotal);

    var x = {
        name: memberOne.name + " & " + memberTwo.name + "($" + monthlyPaymentTotal + ")",
        type: "spline",
        yValueFormatString: "$ #0.##",
        showInLegend: true,
        dataPoints: dataPoints
    }

    return x;
}

function LineGraph(props) {
    var title = "Loan Graph";
    var data = props.data;
    var lines = [];

    if (data.members.length > 1) {
        var lineForRichestMember = drawLineForRichestMember(data);
        var lineForPoorestMember = drawLineForPoorestMember(data);
        var lineForTopTwoMembers = drawLineForTopTwoMembers(data);
        var lineForAllMembers = drawLineForAllMembers(data);

        lines.push(lineForRichestMember);
        lines.push(lineForPoorestMember);
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
                <CanvasJSChart options = {options} />
            </Segment>
}

export default LineGraph;