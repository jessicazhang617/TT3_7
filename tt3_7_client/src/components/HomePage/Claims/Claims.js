import './Claims.css'
import Button from '../../Button/Button'
import {useState, useEffect} from 'react'

const Claims = ({status,data}) => {

    const [ifAccepted, setIfAccepted] = useState(false)

    const HandleState = () => {
        if (status == 'Accepted') {
            setIfAccepted(true);
        } else {
            setIfAccepted(false);
        }
    }

    useEffect(() => {
       HandleState() 
    }, [])



    return (
        <div className='Claims'>
       
            <div>
            {!ifAccepted && <Button classname='edit' buttonText='Edit'/>}
            {!ifAccepted && <Button classname='delete' buttonText='Delete'/> }
                <span>Project id: {data.project_id}</span>
                <span>Claim id: {data.claim_id}</span>
                <span>Currency: {data.currency}</span>
            </div>

    </div>

    )


}
export default Claims