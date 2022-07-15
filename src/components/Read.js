import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`https://62ca93dc3e924a01285b6d92.mockapi.io/fakeData`)
    .then((response) => {
        setAPIData(response.data);
    })  }, [])
    const setData = (data) => {
      let { id, firstName, lastName, checkbox } = data;
      localStorage.setItem('ID', id);
      localStorage.setItem('First Name', firstName);
      localStorage.setItem('Last Name', lastName);
      localStorage.setItem('Checkbox Value', checkbox)
   }
   const getData = async () => {
   await axios.get(`https://62ca93dc3e924a01285b6d92.mockapi.io/fakeData`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}
   const onDelete = (id) => {
    axios.delete(`https://62ca93dc3e924a01285b6d92.mockapi.io/fakeData/${id}`)
 .then(() => {
    getData();
})
}
    return (
        <div>
        <h1>Hello</h1>
        {APIData.map((data , index) => {
          return (
            <table key={index}>
 <tr key={index}>
   <th>{data.firstName}</th>
   <th>{data.lastName}</th>
   <th>{data.checkbox ? 'Checked' : 'Unchecked'}</th>
 </tr>
 <Link to='/update'>
  <button onClick={() => setData(data)}>ubdate</button></Link>
 <button onClick={() => onDelete(data.id)}>Delete</button>


 {/* <tr>
<td>Masha</td>
<td>aldossary</td>
<td>yes</td>
 </tr> */}
            </table>
          )
        })}
            
        </div>
    )
}
