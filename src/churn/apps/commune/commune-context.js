import React from "react";

const CommuneContext = React.createContext({
    loan: 1000000,
    perAnnumInterest: 4,
    loanLifetime: 30,
    loanStartYear: 2023,
    setLoan: () => { },
    setPerAnnumInterest: () => { },
    setLoanLifetime: () => { },
    setLoanStartYear: () => { },
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
});

export default CommuneContext;