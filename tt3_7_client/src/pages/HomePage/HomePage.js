import ClaimsTable from "../../components/HomePage/ClaimsTable/ClaimsTable"
import './HomePage.css'
import Button from '../../components/Button/Button'
import ModalForm from '../../components/HomePage/ModalForm'
import { useState } from 'react'
import NavBar from "../../components/NavBar/NavBar"
import { ClaimsContextProvider } from '../../context/claims.context';



const HomePage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleCreateForm = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            <ClaimsContextProvider>
                <NavBar />
                <div>
                    <ClaimsTable currStatus='pending' />
                    <ClaimsTable currStatus='accepted' />
                    <ClaimsTable currStatus='rejected' />
                    <Button className='createClaim' buttonText='Create Claim' onClick={() => toggleCreateForm()} />
                    {isModalOpen && <ModalForm />}
                </div>
            </ClaimsContextProvider>
        </>
    )
}

export default HomePage