import React from "react";
import { Label, Segment } from "semantic-ui-react";
import CommuneContext from "../commune-context.js";

function LoanSummary() {
    return  <Segment
                color={"teal"}
                className="home-segment"
            >
                <Label as="a" color="teal" ribbon>Loan Summary</Label>
                <CommuneContext.Consumer>
                    {
                        ({loan, loanStartYear, loanLifetime, perAnnumInterest}) => (
                            <React.Fragment>
                                <br/>
                                <br/>
                                The chart displays the lifetime of the loan, which is ${loan.toLocaleString()} total.
                                <br/>
                                It begins in {loanStartYear}, lasting for {loanLifetime} years at a yearly interest of {perAnnumInterest}%.
                                <br/>
                            </React.Fragment>
                        )
                    }
                </CommuneContext.Consumer>
            </Segment>;
}

export default LoanSummary;