import { useContext, useEffect } from "react";
import { UserContext } from "../../context/user.context";
import './NavBar.css';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const { user, setUser } = useContext(UserContext);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleClick = () => {
        setUser(null);
    }
  return (
    <div className="NavBar">
        <div className="nav_content">
            <span className="welcome">Welcome, {user ? user.FirstName : 'Guest'}</span>
            <button onClick={handleClick} className="logout">Log Out</button>
        </div>
    </div>
  )
}

export default NavBar