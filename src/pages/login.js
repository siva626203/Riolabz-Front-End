import React, { useState } from 'react'
import AxiosInstance from '../AxiosInstance';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate=useNavigate()
  const [value,setValue]=useState({
    email:String,
    password:String
  })
  const UserLogin=(e)=>{
    e.preventDefault();
    try {
      AxiosInstance.get('/user/login',{params:value})
      .then((res)=>{
          if (res.data.message === "Wrong Password" ||res.data.message=== "Wrong Email") {
            console.log(res.data);
            toast.error(res.data.message);
          }else{
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("data",JSON.stringify(res.data.data));
            setTimeout(e=>toast.success(res.data.message),3000)
            navigate('/dashboard')
          }
            
      })
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <><ToastContainer /><div className="flex justify-center">
      <form className="w-full max-w-sm mt-10" onSubmit={UserLogin}>
        <h1 className="text-center text-3xl">Login Page</h1>
        <div className="md:flex md:items-center mb-6 mt-5">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              E-Mail
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))}
              type="email"
              required />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"

            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              onChange={(e) => setValue((prev) => ({ ...prev, password: e.target.value }))}
              placeholder="******************"
              required />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div></>
  );
}

export default Login