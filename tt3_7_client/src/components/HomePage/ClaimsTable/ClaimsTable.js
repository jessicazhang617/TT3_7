import './ClaimsTable.css'
import Claims from '../Claims/Claims'
import Button from '../../Button/Button'
import {useState, useEffect} from 'react'


const ClaimsTable = ({currStatus}) => {

    const [claims, setClaims] = useState([])

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

    useEffect(() => {
        setClaims(data);
     }, [])

    const toggleDelete = (project_id) => {
        if (window.confirm(`Delete claim ${project_id}?`)) {
        const updatedClaims = claims.filter(claims => claims.project_id !== project_id)
        setClaims(updatedClaims)
        console.log('toggledelete ran')
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