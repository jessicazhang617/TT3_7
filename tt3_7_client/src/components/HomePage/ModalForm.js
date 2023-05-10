import { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './ModalForm.css';
import Modal from 'react-modal';

const ModalForm = ({
    formReturn,
    defaultDate,
    defaultClaimAmt,
    defaultCurrency,
    defaultPurpose,
    title,
    buttonText,
    claimID,
    modalIsOpen,
    setModalIsOpen
}) => {


    const [date, setDate] = useState(defaultDate); //To fill default value from API
    const [claimAmt, setClaimAmt] = useState(defaultClaimAmt); //To fill default value from API
    const [currency, setCurrency] = useState(defaultCurrency); //To fill default value from API
    const [purpose, setPurpose] = useState(defaultPurpose); //To fill default value from API

    const currencyOptions = ['CNY', 'HKD', 'IDR', 'INR', 'JPY', 'KHR', 'KRW', 'SGD', 'TWD', 'VND']
    const defaultOption = 'SGD'

    const onSubmit = (e) => {
        e.preventDefault();

        if (!date) {
            alert('Please add a date');
            return;
        }

        if (claimAmt <= 0) {
            alert('Please enter positive claimAmt');
            return;
        }

        if (!currency) {
            alert('Please fill in currency');
            return;
        }

        formReturn({
            date,
            claimAmt,
            currency,
            purpose
        });
        
        setDate('');
        setClaimAmt(0);
        setCurrency(defaultOption);
        setPurpose('');

        setModalIsOpen(false);

    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Example Modal"
        >
            <h1>{title}</h1>
            <h2>Claim ID: { claimID }</h2>
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control form-control-check'>
                <label>Date</label>
                <input
                    type='datetime-local'
                    placeholder='Add date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Claim amount</label>
                <input
                    type='number'
                    placeholder='Add claim amount'
                    value={claimAmt}
                    onChange={(e) => setClaimAmt(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Currency</label>
                <Dropdown
                    options={currencyOptions}
                    onChange={setCurrency}
                    value={defaultOption}
                    placeholder="Select claim amount" />;
            </div>
            <div className='form-control form-control-check'>
                <label>Claim purpose</label>
                <textarea
                    type='text'
                    placeholder='Add claim purpose'
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                />
            </div>
                <input type='submit' value={buttonText} className='btn btn-block' />
                <button onClick={() => setModalIsOpen(false)} className='btn btn-block'>Close</button>
            </form>
        </Modal>
    )
}

ModalForm.defaultProps = {
    formReturn: () => { },
    defaultDate: '',
    defaultClaimAmt: 0,
    defaultCurrency: 'SGD',
    defaultPurpose: '',
    title: 'Add claims',
    buttonText: 'Submit',
    claimID: 0
}

export default ModalForm