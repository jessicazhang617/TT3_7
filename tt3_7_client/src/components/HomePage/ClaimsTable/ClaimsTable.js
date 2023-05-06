import './ClaimsTable.css'
import Claims from '../Claims/Claims'
import Button from '../../Button/Button'
import {useState, useEffect} from 'react'


const ClaimsTable = ({currStatus}) => {

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
    const status = currStatus

    return (
        <div className='ClaimsTable'>
            <h1>{currStatus}</h1>
            {data.map(data => <Claims status={currStatus} data={data}/>)}
        </div>

    )

}

export default ClaimsTable