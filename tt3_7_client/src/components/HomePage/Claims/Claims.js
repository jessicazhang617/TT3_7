import './Claims.css'
import Button from '../../Button/Button'
import { useState, useEffect } from 'react'
import ModalForm from '../ModalForm'

const Claims = ({ status, data, toggleDelete }) => {

    const [isModalOpen, setModalIsOpen] = useState(false);

    return (
        <div className='Claims'>
       
            <div>
                {status !== 'Accepted' && <Button classname='edit' buttonText='Edit' onClick={() => setModalIsOpen(!isModalOpen)} /> }
                {status !== 'Accepted' && <Button classname='delete' buttonText='Delete' onClick={() => toggleDelete(data.project_id)}/> }
                <span>Project id: {data.project_id}</span>
                <span>Claim id: {data.claim_id}</span>
                <span>Currency: {data.currency}</span>
            </div>

            {isModalOpen && <ModalForm
                defaultDate={data.date}
                defaultClaimAmt={data.claimAmt}
                defaultPurpose={ data.purpose }
                defaultCurrency={ data.currency }
            />}

    </div>

    )


}
export default Claims