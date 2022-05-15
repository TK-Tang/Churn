import { Component } from "react";
import { Grid } from "semantic-ui-react";
import AddNewMember from "./components/add-new-member.js";
import CommuneContext from "./commune-context.js";
import InterestChart from "./components/interest-chart.js"
import Introduction from "./components/introduction.js"
import LineGraph from "./components/loan-graph.js";
import LinksAndInfo from "./components/links-and-info.js";
import LoanAndInterest from "./components/loan-and-interests.js";
import TotalnterestPaidPerMember from "./components/total-interest-paid-per-member.js";
import TotalLoanPaidPerMember from "./components/total-loan-paid-per-member.js";
import TheRoomMates from "./components/the-room-mates.js";
import Save from "./components/save.js";

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
            setPerAnnumInterest: (value) => { this.setState({perAnnumInterest: value}) },
            setLoanLifetime: (value) => { this.setState({loanLifetime: value}) },
            setLoanStartYear: (value) => { this.setState({loanStartYear: value}) },
            members: [ 
                {
                    name: "James Holden",
                    monthlyPayment: 4300
                },
                {
                    name: "Naomi Nagata",
                    monthlyPayment: 3900
                },
                {
                    name: "Alex Kamal",
                    monthlyPayment: 3200
                },
                {
                    name: "Amos Burton",
                    monthlyPayment: 3400
                },
                {
                    name: "Chisjen Avasarala",
                    monthlyPayment: 5100
                }
            ],
            addMember: () => { 
                this.setState (
                    previouState => 
                    ({ 
                        members: [...previouState.members, { name: this.state.memberName, monthlyPayment: this.state.memberMonthlyPayment }],
                    })
                )
            },
            deleteMember: (value) => { 
                this.setState (
                    x =>
                    ({
                        members: [...this.state.members.filter((m) => { return m.name != value})]
                    })
                )
            },
            memberName: "Bobbie Draper",
            setMemberName: (value) => { this.setState({memberName: value}) },
            memberMonthlyPayment: 7700,
            setMemberMonthlyPayment: (value) => { this.setState({memberMonthlyPayment: value}) }
        }
    }

    render(){
        return (
            <CommuneContext.Provider value={this.state}>
                <Grid id="main-grid">
                    <Grid.Row>
                        <Grid.Column width={9}>
                            <Introduction/>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <LinksAndInfo/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={9}>
                            <LoanAndInterest/>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <AddNewMember/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={15}>
                            <LineGraph data={this.state}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={15}>
                            <InterestChart data={this.state}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <TotalnterestPaidPerMember data={this.state}/>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <TotalLoanPaidPerMember data={this.state}/>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <TheRoomMates/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Save/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </CommuneContext.Provider>
        );
    }
}