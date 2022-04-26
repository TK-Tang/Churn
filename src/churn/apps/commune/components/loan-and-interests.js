import { Form, Input, Label, Segment } from "semantic-ui-react";
import CommuneContext from "../commune-context.js";

function LoanInput() {
    return  <Input labelPosition="right" type="text" placeholder="Loan">
                <Label basic>$</Label>
                <CommuneContext.Consumer>
                    {
                        ({loan, setLoan}) => 
                        (
                            <input
                                value={loan}
                                onChange={e => setLoan(e.target.value)}
                            />
                        )
                    }
                </CommuneContext.Consumer>
                <Label>.00</Label>
            </Input>;
}

function PerAnnumInterestInput() {
    return  <Input labelPosition="right" type="text" placeholder="Per Annum Interest">
                 <CommuneContext.Consumer>
                    {
                        ({perAnnumInterest, setPerAnnumInterest}) => 
                        (
                            <input
                                value={perAnnumInterest}
                                onChange={e => setPerAnnumInterest(e.target.value)}
                            />
                        )
                    }
                </CommuneContext.Consumer>
                <Label>%</Label>
            </Input>;
}

function LoanLifetimeInput() {
    return  <Input labelPosition="right" type='number' >
                <CommuneContext.Consumer>
                    {
                        ({loanLifetime, setLoanLifetime}) => 
                        (
                            <input
                                placeholder="Loan Lifetime"
                                value={loanLifetime}
                                onChange={e => setLoanLifetime(e.target.value)}
                            />
                        )
                    }
                </CommuneContext.Consumer>
                <Label>Years</Label>
            </Input>;
}

function LoanStarYearInput() {
    return  <Input 
                labelPosition="right" 
            >
                <CommuneContext.Consumer>
                    {
                        ({loanStartYear, setLoanStartYear}) => 
                        (
                            <input
                                min="1900"
                                max="2099"
                                placeholder="Loan Start Year"
                                step="1"
                                value={loanStartYear}
                                onChange={e => setLoanStartYear(e.target.value)}
                            />
                        )
                    }
                </CommuneContext.Consumer>
                <Label>Year</Label>
            </Input>;   
}

function LoanAndInterest() {
    return  <Segment
                color={"green"}
                className="home-segment"
            >
                    <Label as="a" color="green" ribbon>Loan and Interest</Label>

                    <br/>
                    <br/>
                    The loan you all take to buy your home and the interest rate.
                    <br/>
                    <br/>

                    <Form>
                        <Form.Group>
                            <Form.Field
                                control={LoanInput}
                                label="Loan"
                                placeholder="Loan"
                            />
                            <Form.Field
                                control={PerAnnumInterestInput}
                                label="Per Annum Interest"
                                placeholder="Per Annum Interest"
                            />
                            <Form.Field
                                control={LoanLifetimeInput}
                                label="Loan Lifetime"
                                placeholder="Loan Lifetime"
                            />
                            <Form.Field
                                control={LoanStarYearInput}
                                label="Loan Start Year"
                            />
                        </Form.Group>
                    </Form>
            </Segment>;
}

export default LoanAndInterest;