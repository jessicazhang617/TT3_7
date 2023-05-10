import './ClaimsTable.css'
import Claims from '../Claims/Claims'
import { useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../../context/user.context'
import { ClaimsContext } from '../../../context/claims.context'


const ClaimsTable = ({ currStatus }) => {

    const { claims, setClaims } = useContext(ClaimsContext)
    const { user } = useContext(UserContext)

     const fetchData = async () => { 
         try {
             const data = await axios.get(`/claims/${currStatus}/${user.EmployeeID}`)
             setClaims(data)
         } catch(error) {
             console.log(error)
         }
     }

    useEffect(() => {
        // fetchData();
        //setClaims(data)
     }, [])

    const toggleDelete = (claim_id) => {
        if (window.confirm(`Delete claim ${claim_id}?`)) {
            const updatedClaims = claims.filter(claim => claim.claim_id !== claim_id)
            setClaims(updatedClaims)
        }
    }

    return (
        <div className='ClaimsTable'>
            <h1>{currStatus}</h1>
            {claims.map((claim) => <Claims status={currStatus} data={claim} toggleDelete={toggleDelete} />)}
        </div>
    )
}

export default ClaimsTable