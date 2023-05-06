import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import './NavBar.css';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const { user, setUser } = useContext(UserContext);
    setUser({ 
      "EmployeeID": 10011, 
      "SupervisorID": 10006, 
      "DepartmentCode": "106", 
      "Password": "SedapNyumyum55", 
      "FirstName": "Siti", 
      "LastName": "Zubaidah", 
      "BankAccountNumber": "2345678903" 
  })
    const navigate = useNavigate();
    const handleClick = () => {
        setUser(null);
        navigate('/');
    }
  return (
    <div className="NavBar">
        <div className="nav_content">
            {/* <span className="welcome">Welcome, {user.FirstName}</span>
            <button onClick={handleClick} className="logout">Log Out</button> */}
        </div>
    </div>
  )
}

export default NavBar