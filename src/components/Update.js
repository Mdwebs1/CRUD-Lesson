import React , {useEffect,useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function Update() {
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [id, setID] = useState(null);

  
useEffect(() => {
  setID(localStorage.getItem('ID'))
  setFirstName(localStorage.getItem('First Name'));
  setLastName(localStorage.getItem('Last Name'));
  setCheckbox(localStorage.getItem('Checkbox Value'))
}, []);
  const updateAPIData = async() => {
    await  axios.put(`https://62ca93dc3e924a01285b6d92.mockapi.io/fakeData/${id}`, {
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
          <button type='submit' onClick={updateAPIData}>Update</button>
  </div>
)
}

export default Update