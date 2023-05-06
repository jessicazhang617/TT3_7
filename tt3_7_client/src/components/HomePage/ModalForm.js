import { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './ModalForm.css';

const ModalForm = ({
    formReturn,
    defaultDate,
    defaultClaimAmt,
    defaultCurrency,
    defaultPurpose
}) => {


    //const [firstName, setFirstName] = useState(""); //To fill default value from API
    //const [lastName, setLastName] = useState(""); //To fill default value from API
    const [date, setDate] = useState(defaultDate); //To fill default value from API
    const [claimAmt, setClaimAmt] = useState(defaultClaimAmt); //To fill default value from API
    const [currency, setCurrency] = useState(defaultCurrency); //To fill default value from API
    const [purpose, setPurpose] = useState(defaultPurpose); //To fill default value from API
    //const [isFollowUp, setIsFollowUp] = useState(false); //To fill default value from API
    //const [previousClaimId, setPreviousClaimId] = useState(""); //To fill default value from API

    const currencyOptions = ['CNY', 'HKD', 'IDR', 'INR', 'JPY', 'KHR', 'KRW', 'SGD', 'TWD', 'VND']
    const defaultOption = currencyOptions[0]

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

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control form-control-check'>
                <label>Date</label>
                <input
                    type='text'
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
            <input type='submit' value='Submit' className='btn btn-block' />
        </form>
    )
}

/* Removed followup
            <div className='form-control form-control-check'>
                <label>Is follow up claim?</label>
                <input
                    type='checkbox'
                    checked={isFollowUp}
                    value={isFollowUp? 'yes' : 'no'}
                    onChange={(e) => setIsFollowUp(e.currentTarget.checked)}
                />
            </div>
            {isFollowUp && <div className='form-control form-control-check'>
                <label>Previous claim ID</label>
                <input
                    type='text'
                    placeholder='Add previous claim id'
                    value={previousClaimId}
                    onChange={(e) => setPreviousClaimId(e.target.value)}
                />
            </div>
            }
 */

/*
            <div className='form-control'>
                <label>First name</label>
                <input
                    type='text'
                    placeholder='Add first name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Last name</label>
                <input
                    type='text'
                    placeholder='Add last name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
 */

ModalForm.defaultProps = {
    formReturn: () => { },
    defaultDate: '',
    defaultClaimAmt: 0,
    defaultCurrency: '',
    defaultPurpose: ''
}

export default ModalForm