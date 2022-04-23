import { React } from "react";
import { Label, Segment } from "semantic-ui-react";

function LoanSummary() {
    return  <Segment
                color={"teal"}
                className="home-segment"
            >
                <Label as="a" color="teal" ribbon>Loan Summary</Label>
                <br/>
                <br/>
                The loan will be paid off in 15 years
                <br/>
                <br/>
            </Segment>;
}

export default LoanSummary;