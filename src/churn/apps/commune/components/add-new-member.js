import { React } from "react";
import { Button, Form, Icon, Input, Label, Segment } from "semantic-ui-react";
import CommuneContext from "../commune-context.js";

function NameInput() {
    return  <Input 
                iconPosition="left"
                labelPosition="right" 
                placeholder="Name"
                type="text" 
            >
                <Icon name="users" />
                <CommuneContext.Consumer>
                    {
                        ({memberName, setMemberName}) => 
                        (
                            <input
                                type="text"
                                value={memberName}
                                onChange={e => setMemberName(e.target.value)}
                            />
                        )
                    }
                </CommuneContext.Consumer>
                <Label>Name</Label>
            </Input>;  
}

function MonthlyPaymentInput() {
    return  <Input 
                labelPosition="right" 
                type="number" 
                placeholder="Monthly Payment"
            >
                <CommuneContext.Consumer>
                    {
                        ({memberMonthlyPayment, setMemberMonthlyPayment}) => 
                        (
                            <input 
                                min="0"
                                step="100"
                                type="number" 
                                value={memberMonthlyPayment}
                                onChange={e => setMemberMonthlyPayment(e.target.value)}
                            />
                        )
                    }
                </CommuneContext.Consumer>
                <Label>Monthly Payment</Label>
            </Input>;
}

function AddNewMember() {
    return  <Segment
                color={"orange"}
                className="home-segment"
            >
                <Label as="a" color="orange" ribbon>Add New Member</Label>

                <br/>
                <br/>
                Your partner. Your bro. Or another one who loathes the housing market. Who owns a part of the home and pays off a part of the loan.
                <br/>
                <br/>

                <Form>
                    <Form.Group>
                        <Form.Field
                            control={NameInput}
                            label="Name"
                            placeholder="Name"
                        />
                        <Form.Field
                            control={MonthlyPaymentInput}
                            label="Monthly Payment"
                            placeholder="Monthly Payment"
                        />
                        <Form.Field
                            control={Input}
                            placeholder="Add New"
                            label="Add"
                        >
                            <CommuneContext.Consumer>
                                {
                                    ({addMember}) =>
                                    (
                                        <Button primary onClick={addMember}>Add</Button>
                                    )
                                }
                            </CommuneContext.Consumer>
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Segment>
}

export default AddNewMember;