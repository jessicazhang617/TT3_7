import ClaimsTable from "../../components/HomePage/ClaimsTable/ClaimsTable"
import './HomePage.css'
import Button from '../../components/Button/Button'
import NavBar from "../../components/NavBar/NavBar"

const HomePage = () => {
  return (
    <>
    <NavBar/>
    <div>
      <ClaimsTable currStatus='Pending'/>
      <ClaimsTable currStatus='Accepted'/>
      <ClaimsTable currStatus='Rejected'/>
      <Button className='createClaim' buttonText='Create Claim'/>
    </div>
    </>
  )
}

export default HomePage