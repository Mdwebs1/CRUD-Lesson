import React, {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

function LogIn() {
    const navigate = useNavigate();

    const [ logIn , setLogIn ] = useState()


    const userLogIn =()=>{
        const newTask = { id: new Date().getTime().toString(), title: logIn };
        localStorage.setItem("localTasks", JSON.stringify( newTask));
        setLogIn("");
        navigate('/read')    

    }
    useEffect(()=>{
        if(localStorage.getItem("localTasks")){
            const storedList = JSON.parse(localStorage.getItem("localTasks"));
            setLogIn(storedList);
        }
    },[])
  return (
    <div>
        <input onChange={(e) => setLogIn(e.target.value)}  value={logIn}></input>
        <button  onClick={userLogIn}>Log In</button>
    </div>
  )
}

export default LogIn