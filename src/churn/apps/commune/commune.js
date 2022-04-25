import { Component } from "react";
import { Grid } from "semantic-ui-react";
import AddNewMember from "./components/add-new-member.js";
import Charts from "./components/charts.js";
import Introduction from "./components/introduction.js"
import LoanAndInterest from "./components/loan-and-interests.js";
import LoanSummary from "./components/loan-summary.js";
import TheRoomMates from "./components/the-room-mates.js";
import Save from "./components/save.js";
import CommuneContext from "./commune-context.js";

export default class Commune extends Component {
    constructor(props){
        super(props)

        this.state =  {
            email: "",
            loan: 1000000,
            perAnnumInterest: 4,
            loanLifetime: 30,
            loanStartYear: 2023,
            setEmail: (value) => { this.setState({email: value}) },
            setLoan: (value) => { this.setState({loan: value}) },
            setPerAnnumInterest: (value) => { this.setState({perAnnumnterest: value}) },
            setLoanLifetime: (value) => { this.setState({loanLifetime: value}) },
            setLoanStartYear: (value) => { this.setState({loanStartYear: value}) },
            members: [ 
                {
                    name: "TK Tang",
                    monthlyPayment: 5000
                },
                {
                    name: "Simon Tang",
                    monthlyPayment: 4000
                },
                {
                    name: "Lauren Gaydos",
                    monthlyPayment: 1000
                }
            ]
        }
    }

    render(){
        return (
            <CommuneContext.Provider value={this.state}>
                <Grid>
                    <Grid.Column width={12}>
                        <Introduction />
                        <LoanAndInterest/>
                        <AddNewMember/>
                        <Charts data={this.state}/>
                        <LoanSummary/>
                        <TheRoomMates/>
                        <Save/>
                    </Grid.Column>
                </Grid>
            </CommuneContext.Provider>
        );
    }
}