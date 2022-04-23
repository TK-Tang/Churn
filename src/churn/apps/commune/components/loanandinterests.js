import { React } from "react";
import { Form, Input, Label, Segment } from "semantic-ui-react";

function LoanInput() {
    return <Input labelPosition="right" type="text" placeholder="Loan">
                <Label basic>$</Label>
                <input />
                <Label>.00</Label>
            </Input>;
}

function PerAnnumInterestInput() {
    return <Input labelPosition="right" type="text" placeholder="Per Annum Interest">
                <input />
                <Label>%</Label>
            </Input>;

}

function LoanLifetimeInput() {
    return <Input labelPosition="right" type='number' placeholder='Loan Lifetime'>
                <input />
                <Label>Years</Label>
            </Input>;
}

function LoanStarYearInput() {
    return <Input labelPosition="right" type="number" placeholder="Loan Start Year">
                <input  type="number" min="1900" max="2099" step="1" />
                <Label>Years</Label>
            </Input>;   
}

function LoanAndInterest() {
    return <Segment
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