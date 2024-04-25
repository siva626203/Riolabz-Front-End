import React, { useState } from 'react'
import AxiosInstance from '../AxiosInstance'
import { ToastContainer,toast } from 'react-toastify';
function Register() {
  const [value,setValue]=useState({
    email:String,
    password:String,
    phone:Number,
    address:String
  })
  const UserRegister=(e)=>{
    e.preventDefault();
    try {
      AxiosInstance.post("/user/register",value)
      .then((res)=>{
        if (res.data.message==="email already exists"){
          toast.info(res.data.message)
        }else toast.success(res.data.message);
      }).catch(err=>toast.error(e.message))
    } catch (error) {
      
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="flex justify-center">
        <form className="w-full max-w-sm mt-10" onSubmit={UserRegister}>
          <h1 className="text-center text-3xl">Register Page</h1>
          <div className="md:flex md:items-center mb-6 mt-5">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                onChange={(e) =>
                  setValue((val) => ({ ...val, email: e.target.value }))
                }
                type="email"
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                onChange={(e) =>
                  setValue((val) => ({ ...val, password: e.target.value }))
                }
                type="password"
                placeholder="******************"
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Phone
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="number"
                onChange={(e) =>
                  setValue((val) => ({ ...val, phone: e.target.value }))
                }
                max={9999999999}
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Address
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                onChange={(e) =>
                  setValue((val) => ({ ...val, address: e.target.value }))
                }
                required
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register