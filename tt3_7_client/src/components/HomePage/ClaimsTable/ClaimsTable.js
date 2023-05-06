import './ClaimsTable.css'
import Button from '../../Button/Button'
import {useState} from 'react'



const ClaimsTable = (props) => {
    
    const [ifAccepted, setIfAccepted] = useState(false)

    const HandleState = () => {
        if (props.status == 'Accepted') {
            setIfAccepted(true);
        } else {
            setIfAccepted(false);
        }
    
    }

    return (
        <div class={props.status}>
            <h1>{props.status}</h1>
            <span>
                <ul>
                <li>Project id: {props.project_id}
                    <Button classname='edit' buttonText='Edit'/>
                    <Button classname='delete' buttonText='Delete'/>
                    </li>
                <li>Claim id: {props.claim_id}</li>
                <li>Currency: {props.currency}</li>
                </ul>
            </span>
        </div>

    )

}

export default ClaimsTable