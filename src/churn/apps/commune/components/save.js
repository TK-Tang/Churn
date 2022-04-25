import { React } from "react";
import { Button, Form, Icon, Input, Label, Segment } from "semantic-ui-react";
import CommuneContext from "../commune-context.js";

function EmailInput() {
    return  <Input 
                labelPosition="right" 
                iconPosition="left"
                type="text" 
                placeholder="Email"
            >
                <Icon name='at' />
                <CommuneContext.Consumer>
                    {
                        ({email, setEmail}) => 
                        (
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        )
                    }
                </CommuneContext.Consumer>
                <Label>Email</Label>
            </Input>;   
}

function TheRoomMates() {
    return  <Segment
                color={"pink"}
                className="home-segment"
            >
                <Label as="a" color="pink" ribbon>Save</Label>
                <br/>
                <br/>
                Enter your email address to save your data and hit save, so you can load your data again in the future.
                <br/>
                <br/>

                <Form>
                    <Form.Group>
                        <Form.Field
                            control={EmailInput}
                            placeholder="Name"
                        />
                        <Form.Field
                            control={Input}
                        >
                            <Button color="blue">Save</Button>
                        </Form.Field>
                        <Form.Field
                            control={Input}
                        >
                            <Button color="teal">Load</Button>
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Segment>;
}

export default TheRoomMates;