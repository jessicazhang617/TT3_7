//import personService from '../services/persons'
//import Notification from './Notification';
import { useState } from 'react'
import Field from './Field';

const ModalForm = ({ newName, newNumber, persons, setNewName, setNewNumber, setPersons }) => {

    const [firstName, setFirstName] = useState(""); //To fill default value from API
    const [lastName, setLastName] = useState(""); //To fill default value from API
    const [date, setDate] = useState(""); //To fill default value from API
    const [claimAmt, setClaimAmt] = useState(0); //To fill default value from API
    const [currency, setCurrency] = useState(""); //To fill default value from API
    const [purpose, setPurpose] = useState(""); //To fill default value from API
    const [isFollowUp, setIsFollowUp] = useState(false); //To fill default value from API
    const [previousClaimId, setPreviousClaimId] = useState(""); //To fill default value from API
    //   const [errorMessage, setErrorMessage] = useState(null)

    //   const handleNameChange = (event) => {
    //     setNewName(event.target.value)
    //   }

    //   const handleNumberChange = (event) => {
    //     setNewNumber(event.target.value)
    //   }

    //   const addPerson = (event) => {
    //     event.preventDefault()
    //     const personObject = {
    //       name: newName,
    //       number: newNumber
    //     }

    //     const foundName = persons.find(persons => {
    //       return persons.name == newName
    //     })

    //     if (foundName) {
    //       if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
    //         const changedPerson = {...foundName, number: newNumber}

    //         personService
    //         .update(foundName.id, changedPerson)
    //         .then(returnedNote => {
    //           setPersons(persons.map(persons => foundName.name !== persons.name ? persons: changedPerson))
    //           setErrorMessage(
    //             Changed ${changedPerson.name}'s number
    //           )
    //           setTimeout(() => {
    //             setErrorMessage(null)
    //           }, 5000)
    //         })

    //       }
    //     } else if (!newName + !newNumber) {
    //       alert('Please fill in all blanks!')
    //     } else {
    //       personService
    //       .create(personObject)
    //       .then(personObject => {
    //         setPersons(persons.concat(personObject.data))})

    //       setErrorMessage(
    //         Added ${personObject.name}
    //       )
    //       setTimeout(() => {
    //         setErrorMessage(null)
    //       }, 5000)
    //     }
    //     setNewName('')
    //     setNewNumber('')


    //   }
    return (
        <form className='add-form' onSubmit={onSubmit}>
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
                <input
                    type='number'
                    placeholder='Add claim amount'
                    value={claimAmt}
                    onChange={(e) => setClaimAmt(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Claim purpose</label>
                <input
                    type='text'
                    placeholder='Add claim purpose'
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Is follow up claim?</label>
                <input
                    type='checkbox'
                    checked={isFollowUp}
                    value={isFollowUp? 'yes' : 'no'}
                    onChange={(e) => setIsFollowUp(e.currentTarget.checked)}
                />
            </div>
            {<div className='form-control form-control-check'>
                <label>Previous claim ID</label>
                <input
                    type='text'
                    placeholder='Add previous claim id'
                    value={previousClaimId}
                    onChange={(e) => setPreviousClaimId(e.target.value)}
                />
            </div>
            }
            <input type='submit' value='Submit' className='btn btn-block' />
        </form>
    )
}

export default ModalForm