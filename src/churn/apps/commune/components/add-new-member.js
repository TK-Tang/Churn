import { React } from "react";
import { Button, Form, Icon, Input, Label, Segment } from "semantic-ui-react";

function NameInput() {
    return  <Input 
                iconPosition="left"
                labelPosition="right" 
                placeholder="Name"
                type="text" 
            >
                <Icon name="users" />
                <input  type="text"/>
                <Label>Name</Label>
            </Input>;  
}

function MonthlyPaymentsInput() {
    return  <Input 
                labelPosition="right" 
                type="number" 
                placeholder="Monthly Payments"
            >
                <input  type="number" step="100" min="0"/>
                <Label>Monthly Payments</Label>
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
                            control={MonthlyPaymentsInput}
                            label="Monthly Payments"
                            placeholder="Monthly Payments"
                        />
                        <Form.Field
                            control={Input}
                            placeholder="Add New"
                            label="Add"
                        >
                            <Button primary>Add</Button>
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Segment>
}

export default AddNewMember;