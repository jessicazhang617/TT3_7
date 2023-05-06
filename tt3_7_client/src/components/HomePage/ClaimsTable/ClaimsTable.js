import './ClaimsTable.css'
import Claims from '../Claims/Claims'
import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { UserContext } from '../../../context/user.context'


const ClaimsTable = ({currStatus}) => {

    const [claims, setClaims] = useState([])
    const [user] = useContext(UserContext)

    const data = [
        {   
            project_id: 1,
            claim_id: 1,
            currency: 'SGD'
        },
        {
            project_id: 2,
            claim_id: 2,
            currency: 'HKD'
        }
        
    ]

    const fetchData = async () => { 
        try {
            const testdata = await axios.get(`/claims/${currStatus}/${user.EmployeeID}`)
            // setClaims(data)
            console.log(testdata)
        }catch(error) {
            console.log(error)
        }
    }


    useEffect(() => {
        // fetchData();
        setClaims(data)
     }, [])

    const toggleDelete = (claim_id) => {
        if (window.confirm(`Delete claim ${claim_id}?`)) {
        const updatedClaims = claims.filter(claims => claims.claim_id !== claim_id)
        setClaims(updatedClaims)
    }
    }


    return (

        <div className='ClaimsTable'>
            <h1>{currStatus}</h1>
            {claims.map(claims => <Claims status={currStatus} data={claims} toggleDelete={toggleDelete}/>)}
        </div>

    )

}

export default ClaimsTable