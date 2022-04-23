import { React, Component } from "react";
import { Grid} from "semantic-ui-react";
import AddNewMember from "./components/addnewmember.js";
import Charts from "./components/charts.js";
import Introduction from "./components/introduction.js"
import LoanAndInterest from "./components/loanandinterests.js";
import LoanSummary from "./components/loansummary.js";
import TheRoomMates from "./components/theroommates.js";

export default class Commune extends Component {
    render(){
        return (
            <Grid columns={3}>
                <Grid.Column width={12}>
                    <Introduction />
                    <LoanAndInterest/>
                    <AddNewMember/>
                    <Charts/>
                    <LoanSummary/>
                    <TheRoomMates/>
                </Grid.Column>
            </Grid>
        );
    }
}