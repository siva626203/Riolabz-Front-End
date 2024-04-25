import React, { useEffect } from 'react'
import { useState } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AxiosInstance from '../AxiosInstance';
import { ToastContainer,toast } from 'react-toastify';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Userpromotion() {
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
const [value, setValue] = useState({
  email: String,
  type:String
});
const [data,setData]=useState()
const Promote = (e) => {
  e.preventDefault();
  try {
    console.log(value)
    AxiosInstance.put("/admin/promote", value).then((res) => {
        handleClose()
    toast.success(res.data.message)
    });
  } catch (error) {
    toast.error(error.message);
  }
};
useEffect(()=>{
    AxiosInstance.get("/user/get")
    .then((res)=>{
        setData(res.data)
    })
},[])
 return (
   <div>
     <ToastContainer />
     <Button onClick={handleOpen}>Promote Users</Button>
     <Modal
       open={open}
       onClose={handleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
     >
       <Box sx={style}>
         <div className="flex justify-center">
           <form className="w-full max-w-sm mt-10" onSubmit={Promote}>
             <h1 className="text-center text-3xl">User Promote</h1>
             <div className="md:flex md:items-center mb-6 mt-5">
               <div className="md:w-1/3">
                 <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                   User E-Mail
                 </label>
               </div>
               <div className="md:w-2/3">
                 <select
                   className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                   onChange={(e) =>
                     setValue((prev) => ({ ...prev, email: e.target.value }))
                   }
                   required
                 >
                   <option
                     className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                     value=""
                     selected
                     disabled
                     hidden
                   >
                     Select an Option
                   </option>
                   {data?.map((e) => {
                     return (
                       <option
                         type="email"
                         value={e.email}
                         className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                       >
                         {e.email}
                       </option>
                     );
                   })}
                 </select>
               </div>
             </div>
             <div className="md:flex md:items-center mb-6">
               <div className="md:w-1/3">
                 <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                   Type
                 </label>
               </div>
               <div className="md:w-2/3">
                 <select
                   className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                   onChange={(e) =>
                     setValue((prev) => ({
                       ...prev,
                       type: e.target.value,
                     }))
                   }
                   required
                 >
                   <option
                     className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                     value=""
                     selected
                     disabled
                     hidden
                   >
                     Select an Option
                   </option>
                   <option
                     className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                     value={"admin"}
                   >
                     admin
                   </option>
                   <option
                     className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                     value={"user"}
                   >
                     user
                   </option>
                 </select>
               </div>
             </div>
             <div className="md:flex md:items-center">
               <div className="md:w-1/3"></div>
               <div className="md:w-2/3">
                 <button
                   className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                   type="submit"
                 >
                   Promote
                 </button>
               </div>
             </div>
           </form>
         </div>
       </Box>
     </Modal>
   </div>
 );
}

export default Userpromotion