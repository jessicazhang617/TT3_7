import './Claims.css'
import Button from '../../Button/Button'
import { useState, useEffect } from 'react'
import ModalForm from '../ModalForm'

const Claims = ({ status, data, toggleDelete }) => {

    const [isModalOpen, setModalIsOpen] = useState(false);

    return (
        <div className='Claims'>
       
            <div>
<<<<<<< HEAD
            {status !== 'accepted' && <Button classname='edit' buttonText='Edit'/>}
            {status !== 'accepted' && <Button classname='delete' buttonText='Delete' onClick={() => toggleDelete(data.project_id)}/> }
=======
                {status !== 'Accepted' && <Button classname='edit' buttonText='Edit' onClick={() => setModalIsOpen(!isModalOpen)} /> }
                {status !== 'Accepted' && <Button classname='delete' buttonText='Delete' onClick={() => toggleDelete(data.project_id)}/> }
>>>>>>> 23452d924ca1ff47bec7e93387dbe90d69cad855
                <span>Project id: {data.project_id}</span>
                <span>Claim id: {data.claim_id}</span>
                <span>Currency: {data.currency}</span>
            </div>

            {isModalOpen && <ModalForm
                defaultDate={data.date}
                defaultClaimAmt={data.claimAmt}
                defaultPurpose={ data.purpose }
                defaultCurrency={data.currency}
                title='Edit claims'
                claimID={data.claim_id}
            />}

    </div>

    )


}
export default Claims