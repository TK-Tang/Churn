import { hasExceededLoanLifetime, incrementDateByOneMonth } from "../utils/date-utils.js";
import { Label, Segment } from "semantic-ui-react";
import CanvasJSReact from '../../../../canvasjs/canvasjs.react';
import React from "react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function drawPieForAllMembers(data) {
    var dateCursor = new Date(data.loanStartYear, 0, 1);
    var dataPoints = [];
    let totalInterestPaid = 0;
    let monthlyPaymentTotal = 0;
    let monthlyInterest = data.loan * ((data.perAnnumInterest/100)/12);

    data.members.forEach((member) => { 
        monthlyPaymentTotal = +monthlyPaymentTotal + +member.monthlyPayment;
    });

    for (let loan = data.loan; loan > monthlyPaymentTotal; loan = loan + monthlyInterest)
    {
        monthlyInterest = loan * ((data.perAnnumInterest/100)/12);
        totalInterestPaid = totalInterestPaid + monthlyInterest;
        loan = loan - monthlyPaymentTotal;
        dateCursor = incrementDateByOneMonth(dateCursor);

        if (hasExceededLoanLifetime(dateCursor, data))
        {
            break;
        }
    }

    data.members.forEach((member) => {
        var totalInterestPaidPerMember = (member.monthlyPayment / monthlyPaymentTotal) * totalInterestPaid
        dataPoints.push({label: member.name, y: Math.round(totalInterestPaidPerMember)});
    });

    return dataPoints;
}

function TotalInterestPaidPerMember(props) {
    var data = props.data;

    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Total Interest Paid Per Member"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: ${y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - ${y}",
            dataPoints: drawPieForAllMembers(data)
        }]
    }

    return  <Segment
                color={"teal"}
                className="home-segment"
            >
                <Label as="a" color="teal" ribbon>Interest Total Split</Label>
                <CanvasJSChart options={options} />
            </Segment>;
}

export default TotalInterestPaidPerMember;