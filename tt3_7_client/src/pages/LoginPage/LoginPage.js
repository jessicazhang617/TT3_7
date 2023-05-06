import { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [formDetails, setFormDetails] = useState({
    id: '',
    password: ''
  });


  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormDetails({
        ...formDetails,
        [name]: [value]
    });

    console.log({formDetails});

    e.target.value = value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Successfully submit');
    console.log(formDetails);
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

            <button onClick={handleSubmit} className='submit_button'>Submit</button>
        </div>

    </div>
  )
}

export default LoginPage