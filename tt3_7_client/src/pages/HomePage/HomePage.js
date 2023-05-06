import ClaimsTable from "../../components/HomePage/ClaimsTable/ClaimsTable"
import './HomePage.css'
import Button from '../../components/Button/Button'
import ModalForm from '../../components/HomePage/ModalForm'
import {useState, useEffect} from 'react'

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleCreateForm = () => {
        setIsModalOpen(true)
        console.log(isModalOpen)
    }

  return (
    <div>
    <ClaimsTable currStatus='Pending'/>
    <ClaimsTable currStatus='Accepted'/>
    <ClaimsTable currStatus='Rejected'/>
    <Button className='createClaim' buttonText='Create Claim' onClick={()=>toggleCreateForm()}/>
    {isModalOpen && <ModalForm/>}
  </div>
  )
}

export default HomePage