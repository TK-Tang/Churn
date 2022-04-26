import React from "react";

const CommuneContext = React.createContext({
    email: "",
    loan: 1000000,
    perAnnumInterest: 4,
    loanLifetime: 30,
    loanStartYear: 2023,
    setEmail: () => { },
    setLoan: () => { },
    setPerAnnumInterest: () => { },
    setLoanLifetime: () => { },
    setLoanStartYear: () => { },
    members: [ ],
    addMember: () => { },
    deleteMembers: () => { },
    memberName: "",
    setMemberName: () => { },
    memberMonthlyPayment: 0,
    setMemberMonthlyPayment: () => { }
});

export default CommuneContext;