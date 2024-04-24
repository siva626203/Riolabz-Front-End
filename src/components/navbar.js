import React from 'react'
import { Link } from "react-router-dom";
function navbar() {
  return (
    <div className="flex bg-red-400 p-3 items-center w-full">
      <h1>NavBar</h1>
      <div className="flex ml-auto mr-4 space-x-8">
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </div>
    </div>
  );
}

export default navbar