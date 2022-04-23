import { React } from "react";
import { Label, Segment, Table } from "semantic-ui-react";

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
                        <Table.Row>
                            <Table.Cell>TK Tang</Table.Cell>
                            <Table.Cell>4000</Table.Cell>
                            <Table.Cell textAlign="right">0</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Simon Tang</Table.Cell>
                            <Table.Cell>3500</Table.Cell>
                            <Table.Cell textAlign="right">0</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Lauren Gaydos</Table.Cell>
                            <Table.Cell>1000</Table.Cell>
                            <Table.Cell textAlign="right">0</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Segment>;
}

export default TheRoomMates;