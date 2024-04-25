import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Userpromotion from '../components/userPromotion'
import AxiosInstance from '../AxiosInstance'
import { ToastContainer,toast } from 'react-toastify'
function Dashboard() {
    const navigate=useNavigate()
    const [user,setUser]=useState()
    const [form,setForm]=useState({email:String,phone:Number,address:String})
    useEffect(()=>{
        if(localStorage.getItem('token')===null){
             navigate('/login')
        }
        setUser(JSON.parse(localStorage.getItem('data')))
        
    },[])
    useEffect(()=>{
        setForm((prev) => ({ ...prev, email: user?.email }));
        setForm((prev) => ({ ...prev, phone: user?.phone }));
        setForm((prev) => ({ ...prev, address: user?.address }));
    },[user])
    const Submit=(e)=>{
         e.preventDefault();
         try {
           
           AxiosInstance.put("/user/update", form).then(async(res) => {
            toast.success(res.data.message)
            localStorage.clear()
             setTimeout((e) => navigate("/login"), 3000);
           });
           

         } catch (error) {
           toast.error(error.message);
         }
    }
  return (
    <div className="space-y-10">
      <ToastContainer />
      <h1 className="text-center text-6xl">Dashboard</h1>
      <h1 className="text-4xl text-center">Profile</h1>
      {user?.type === "admin" ? <Userpromotion /> : null}
      <div className="flex justify-center">
        <form className="w-full max-w-sm" onSubmit={Submit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={form?.email}
                type="email"
                disabled
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
                value={form?.phone}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, phone: e.target.value }))
                }
                type="number"
                min={1111111111}
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
                value={form?.address}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, address: e.target.value }))
                }
                type="text"
                required
              />
            </div>
          </div>
          <p className="text-center">{user?.type}</p>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
          <p>Note: Must be Re-Login after Update</p>
        </form>
      </div>
    </div>
  );
}

export default Dashboard