import React, { useEffect, useState } from 'react'
import AxiosInstance from '../AxiosInstance'
function Home() {
    const [Data,setData]=useState()
    const Get=async ()=>{
        await AxiosInstance.get("/product/get").then((res) => {
          console.log(res.data);
          setData(res.data)
        });
    }
useEffect(()=>{
    Get()
},[])
  return (
    <div>
      <h1 className='text-center text-4xl'>Products</h1>
      <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 justify-items-center">
        {Data?.map((e) => {
          return (
            <div className="m-5 p-10  bg-lime-400">
              <h1 className="text-center">Name:{e.name}</h1>
              <h1 className="text-center">Price:{e.price}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home