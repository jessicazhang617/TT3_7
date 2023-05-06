import { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import axios from 'axios';

const LoginPage = () => {
  const [formDetails, setFormDetails] = useState({
    id: '',
    password: ''
  });

  const {user, setUser} = useContext(UserContext);

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log({name, value});

    setFormDetails({
        ...formDetails,
        [name]: value
    });

    e.target.value = value;
  }

  const validate = (formDetails) => {
    if (!formDetails.id || !formDetails.password) {
        console.log('qwewq');
        setErrorMessage('Fields cannot be empty');
        return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    async function login() {
      try {
          const response = await axios.post('http://localhost:5000/auth', {
            employeeid:formDetails.id,
            password:formDetails.password   
          });
          if (!response.data.length) {
            setErrorMessage('Invalid credentials');
            throw new Error('Invalid credentials');
          }; 
          const user = response.data[0];
          setUser(user);
          navigate('/home')

      } catch (err) {
          console.error('Failed to login', err);
      }
    }
    login();
  }


  return (
    <div className='LoginPage'>
        <h1>Welcome to DBS</h1>
        <img className='image' src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iPr13g5tyKnI/v98/-1x-1.jpg'></img>
        <div className='form'>
            <div className='form_input'>
                <span>ID</span>
                <input onChange={handleChange} name='id' type='text'></input>
            </div>
            <div className='form_input'>
                <span>Password</span>
                <input onChange={handleChange} name='password' type='password'></input>
            </div>
            {
                errorMessage &&
                <span className='error_message'>{errorMessage}</span>
            }
            <div className='button_section'>
                <button onClick={handleSubmit} className='submit_button'>Submit</button>
            </div>

        </div>

    </div>
  )
}

export default LoginPage