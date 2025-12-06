import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const CreateProduct = () => {
 const navigate=useNavigate()
  const {register, reset, handleSubmit}= useForm();
  const dispatch= useDispatch();
  const CreateProductHandler=(product)=>{
    product.id=nanoid();
    console.log(product);
    navigate("/products")
    //dispatch(asyncregisteruser(product));
    
  }

   return (
    <div className="bg-amber-100 flex justify-center items-center h-screen">
      <div className="bg-red-300 shadow-md rounded-2xl p-10 w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Create Product
        </h1>

        <form 
        onSubmit={handleSubmit(CreateProductHandler)}
        className="space-y-5">

          <input
          {...register("image")}
            type="url"
            placeholder="image url"
            className="w-full px-4 py-3 rounded-xl bg-[#f4f1ed] text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          <input
          {...register("title")}
            type="text"
            placeholder="title"
            className="w-full px-4 py-3 rounded-xl bg-[#f4f1ed] text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          <input
          {...register("price")}
            type="number"
            placeholder="0.00"
            className="w-full px-4 py-3 rounded-xl bg-[#f4f1ed] text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          <textarea
          {...register("description")}
            placeholder="Enter description here..."
            className="w-full px-4 py-3 rounded-xl bg-[#f4f1ed] text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          ></textarea>

          <input
          {...register("category")}
            type="text"
            placeholder="category name"
            className="w-full px-4 py-3 rounded-xl bg-[#f4f1ed] text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#e0d5ca] text-gray-800 font-semibold hover:bg-[#d8ccc0] transition"
          >
            Create Product
          </button>
        </form>

      </div>
    </div>
  );
}

export default CreateProduct