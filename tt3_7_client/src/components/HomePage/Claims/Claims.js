import './Claims.css'
import Button from '../../Button/Button'
import {useState, useEffect} from 'react'

const Claims = ({status,data,toggleDelete}) => {

    return (
        <div className='Claims'>
       
            <div>
            {status !== 'accepted' && <Button classname='edit' buttonText='Edit'/>}
            {status !== 'accepted' && <Button classname='delete' buttonText='Delete' onClick={() => toggleDelete(data.project_id)}/> }
                <span>Project id: {data.project_id}</span>
                <span>Claim id: {data.claim_id}</span>
                <span>Currency: {data.currency}</span>
            </div>



    </div>

    )


}
export default Claims