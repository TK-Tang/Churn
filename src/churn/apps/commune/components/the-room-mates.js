import { React } from "react";
import { Button, Icon, Label, Segment, Table } from "semantic-ui-react";
import CommuneContext from "../commune-context";

function TheRoomMates() {
    return  <Segment
                color={"purple"}
                className="home-segment"
                style={main_css}
            >
                <Label as="a" color="purple" ribbon>The Room Mates</Label>
                <Table stackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Monthly Payment</Table.HeaderCell>
                            <Table.HeaderCell textAlign="right">Options</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <CommuneContext.Consumer>
                            {
                                ({members, deleteMember}) => members.map((member, index) => 
                                    <Table.Row key={index}>
                                        <Table.Cell>{member.name}</Table.Cell>
                                        <Table.Cell>{member.monthlyPayment}</Table.Cell>
                                        <Table.Cell textAlign="right">
                                            <Button icon color="red" onClick={() => deleteMember(member.name)}>
                                                <Icon name="trash" />
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            }
                        </CommuneContext.Consumer>
                    </Table.Body>
                </Table>
            </Segment>;
}

const main_css = {
    height: "458px"
}

export default TheRoomMates;