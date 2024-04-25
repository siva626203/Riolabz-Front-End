import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate=useNavigate()
  const [token,setToken]=useState()
  const [user,setUser]=useState()
  useEffect(()=>{
    setToken(localStorage.getItem('token'))
    setUser(JSON.parse(localStorage.getItem("data")))
  },[])
  return (
    <div className="flex bg-red-400 p-3 items-center w-full">
      <h1>
        <Link to={"/"}>NavBar</Link>
      </h1>
      <div className="flex ml-auto mr-4 space-x-8">
        {token === null ? (
          <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </>
        ) : (
          <>
            <Link to={"dashboard"}>Dashboard</Link>
            {user?.type==="admin"?<Link to={"/add"}>Add Product</Link>:null}
            
            <button
              onClick={(e) => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar
