import React from 'react'
import { useContext } from "react"
import { dataContext } from "../NavBar/NavBar";
import ProductCard from './ProductCard';




export default function Product() {
  const contextData = useContext(dataContext);

  if (!contextData) {
    return (
      <div className='text-center text-3xl text-amber-700'>
        Loading Data...
      </div>
    );
  }

  const { post, error, isLoading } = contextData;
  if (error) {
    return (
      <div className='text-center text-3xl text-amber-700'>Product not found...!</div>
    )
  };

  if (isLoading) {
    return (
      <div className='text-center text-3xl text-amber-700'>Wait a Secound!</div>
    )
  }
  console.log(post)
  return (
    <div>

      <div className="pro-search flex items-center gap-2 bg-amber-50 px-10 py-3 rounded-lg shadow-md max-w-md mx-auto mt-4">
        <input
          type="text"
          placeholder="Search Here"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition duration-300">
          Search
        </button>
      </div>

      <div className='mt-10'>
        <ul className='grid grid-cols-3 gap-2'>
          {post?.map(product => <ProductCard key={product.id} product={product}></ProductCard>)}
        </ul>
      </div>
    </div>
  )
}
