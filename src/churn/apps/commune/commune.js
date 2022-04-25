import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import AddNewMember from "./components/add-new-member.js";
import Charts from "./components/charts.js";
import Introduction from "./components/introduction.js"
import LoanAndInterest from "./components/loan-and-interests.js";
import LoanSummary from "./components/loan-summary.js";
import TheRoomMates from "./components/the-room-mates.js";
import CommuneContext from "./commune-context.js";

export default class Commune extends Component {
    render(){
        var context = {text: "asf"}

        return (
            <CommuneContext.Provider value={context}>
                <Grid>
                    <Grid.Column width={12}>
                        <Introduction />
                        <LoanAndInterest/>
                        <AddNewMember/>
                        <Charts/>
                        <LoanSummary/>
                        <TheRoomMates/>
                    </Grid.Column>
                </Grid>
            </CommuneContext.Provider>
        );
    }
}