import { createContext, useState } from "react";

export const ClaimsContext = createContext();

export const ClaimsContextProvider = ({ children }) => {

    const testClaims = [
        {
            "project_id": 1,
            "claim_id": 1,
            "currency": 'SGD',
            "date": '',
            "claimAmt": '',
            "purpose": ''
        },
        {
            "project_id": 2,
            "claim_id": 2,
            "currency": 'HKD',
            "date": '',
            "claimAmt": '',
            "purpose": ''
        }
    ];

    const [claims, setClaims] = useState(testClaims);

    return <ClaimsContext.Provider value={{ claims, setClaims }}>
        {children}
    </ClaimsContext.Provider>
}