import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const testUser = {
        "EmployeeID": 10011,
        "SupervisorID": 10006,
        "DepartmentCode": "106",
        "Password": "SedapNyumyum55",
        "FirstName": "Siti",
        "LastName": "Zubaidah",
        "BankAccountNumber": "2345678903"
    }

    const [user, setUser] = useState(testUser);

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}