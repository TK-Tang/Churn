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

function drawLineForAllMembers(data) {
    var dataPoints = [];
    var dateCursor = new Date(data.loanStartYear, 0, 1);
    var monthlyPaymentTotal = 0;

    data.members.forEach((member) => { 
        monthlyPaymentTotal = monthlyPaymentTotal + member.monthlyPayment;
    });

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

    var dataPoints = [];
    var dateCursor = new Date(data.loanStartYear, 0, 1);
    var monthlyPaymentTotal = richestMember.monthlyPayment;

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

    var dataPoints = [];
    var dateCursor = new Date(data.loanStartYear, 0, 1);
    var monthlyPaymentTotal = poorestMember.monthlyPayment;

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

    var dataPoints = [];
    var dateCursor = new Date(data.loanStartYear, 0, 1);
    var monthlyPaymentTotal = memberOne.monthlyPayment + memberTwo.monthlyPayment;

    for (let loan = data.loan; loan > monthlyPaymentTotal; loan = loan + (loan * ((data.perAnnumInterest/100)/12)))
    {
        loan = loan - monthlyPaymentTotal;
        dateCursor = incrementDate(dateCursor);
        dataPoints.push({x: dateCursor, y: loan});

        if (dateCursor.getFullYear() > data.loanStartYear + data.loanLifetime)
        {
            break;
        }
    }
    
    dataPoints.reverse();

    var x = {
        name: memberOne.name + " & " + memberTwo.name + "($" + monthlyPaymentTotal + ")",
        type: "spline",
        yValueFormatString: "$ #0.##",
        showInLegend: true,
        dataPoints: dataPoints
    }

    return x;
}

function Charts(props) {
    var data = props.data;
    var lines = [];

    var lineForAllMembers = drawLineForAllMembers(data);
    var lineForTopTwoMembers = drawLineForTopTwoMembers(data);
    var lineForRichestMember = drawLineForRichestMember(data);
    var lineForPoorestMember = drawLineForPoorestMember(data);
    lines.push(lineForRichestMember);
    lines.push(lineForPoorestMember);
    lines.push(lineForTopTwoMembers);
    lines.push(lineForAllMembers);

    const options = {
        animationEnabled: true,
        title:{
            text: "Loan Graph"
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

export default Charts;