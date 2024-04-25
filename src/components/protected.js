import React from 'react'
import Dashboard from '../pages/dashboard';
import { Link, useNavigate } from 'react-router-dom';
function Protected() {
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
    if(token===null){
        console.log(token);
        navigate("/login",{replace:true});
    }else{
        return <Dashboard />
    }
  return <Link to={"/login"} className='bg-red-700 m-10 p-3 rounded-md'>Protected Please Login</Link>
}

export default Protected