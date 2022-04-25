import { React } from "react";
import { Label, Segment, Table } from "semantic-ui-react";
import CommuneContext from "../commune-context.js";

function TheRoomMates() {
    return  <Segment
                color={"purple"}
                className="home-segment"
            >
                <Label as="a" color="purple" ribbon>The Room Mates</Label>
                <Table stackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Monthly Payments</Table.HeaderCell>
                            <Table.HeaderCell textAlign="right">Total Lifetime Payment</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <CommuneContext.Consumer>
                            {
                                ({members}) => members.map((member, index) => 
                                    <Table.Row key={index}>
                                        <Table.Cell>{member.name}</Table.Cell>
                                        <Table.Cell>{member.monthlyPayment}</Table.Cell>
                                        <Table.Cell textAlign="right">0</Table.Cell>
                                    </Table.Row>
                                )
                            }
                        </CommuneContext.Consumer>
                    </Table.Body>
                </Table>
            </Segment>;
}

export default TheRoomMates;