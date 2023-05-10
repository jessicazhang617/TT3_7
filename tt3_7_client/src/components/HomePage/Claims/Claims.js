import './Claims.css'
import Button from '../../Button/Button'
import { useState } from 'react'
import ModalForm from '../ModalForm'

const Claims = ({ status, data, toggleDelete }) => {

    const [isModalOpen, setModalIsOpen] = useState(false);

    return (
        <div className='Claims'>
            <div>
                {status !== 'accepted' && <Button classname='edit' buttonText='Edit' onClick={() => setModalIsOpen(!isModalOpen)}/>}
                {status !== 'accepted' && <Button classname='delete' buttonText='Delete' onClick={() => toggleDelete(data.project_id)}/> }
                <span>Project id: {data.project_id}</span>
                <span>Claim id: {data.claim_id}</span>
                <span>Currency: {data.currency}</span>
                <span>Date: {data.date}</span>
                <span>Claim amount: {data.claimAmt}</span>
                <span>Purpose: {data.purpose}</span>
            </div>

            {isModalOpen && <ModalForm
                defaultDate={data.date}
                defaultClaimAmt={data.claimAmt}
                defaultPurpose={data.purpose}
                defaultCurrency={data.currency}
                title='Edit claims'
                claimID={data.claim_id}
                modalIsOpen={isModalOpen}
                setModalIsOpen={setModalIsOpen}
            />}

    </div>
    )
}
export default Claims