import React from "react";

const CommuneContext = React.createContext({
    loan: 0,
    perAnnumInterest: 0,
    loanLifetime: 1,
    loanStartYear: 2023,
    members: [ ]
});

export default CommuneContext;