import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import './NavBar.css';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleClick = () => {
        setUser(null);
        navigate('/');
    }
  return (
    <div className="NavBar">
        <div className="nav_content">
            <span className="welcome">Welcome, {user.FirstName}</span>
            <button onClick={handleClick} className="logout">Log Out</button>
        </div>
    </div>
  )
}

export default NavBar