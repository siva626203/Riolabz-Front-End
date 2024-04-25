import React from 'react'
import { useState } from 'react';
import AxiosInstance from '../AxiosInstance';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function AddProduct() {
    const navigate=useNavigate()
    const [form, setForm] = useState({
      name: String,
      price: Number,
      category: String,
    });
    const Submit = (e) => {
      e.preventDefault();
      try {
        AxiosInstance.post("/product/add", form).then(async (res) => {
          toast.success(res.data.message);
          setTimeout((e) => navigate("/"), 3000);
        });
      } catch (error) {
        toast.error(error.message);
      }
    };
  return (
    <div className="space-y-16">
      <ToastContainer/>
      <h1 className="text-center text-4xl">Add Product</h1>
      <div className="flex justify-center">
        <form className="w-full max-w-sm" onSubmit={Submit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                type="text"
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Price
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, price: e.target.value }))
                }
                type="number"
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Category
              </label>
            </div>
            <div className="md:w-2/3">
              <select
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, category: e.target.value }))
                }
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
                  className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  value="food"
                  type="text"
                >
                  Food
                </option>
                <option
                  className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  value="chines"
                  type="text"
                >
                  Chines
                </option>
                <option
                  className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  value="indian"
                  type="text"
                >
                  Indian
                </option>
                <option
                  className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  value="korea"
                  type="text"
                >
                  Korea
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
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct
