import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Create() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

     const postData  = () => {
        axios.post(`https://62ca93dc3e924a01285b6d92.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
           
          }).then(() => {
            navigate('/read')    
              })
    
    }
  return (
    <div>
       
            <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} /><br></br>
            <input placeholder='Last Name'  onChange={(e) => setLastName(e.target.value)} /><br></br>
            <input type="checkbox"label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
        <button type='submit' onClick={postData} >Submit</button>
    </div>
  )
}

export default Create