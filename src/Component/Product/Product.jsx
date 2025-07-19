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
      <div>
        <ul className='grid grid-cols-3 gap-4'>
          {post?.map(product => <ProductgiCard key={product.id} product={product}></ProductgiCard>)}
        </ul>
      </div>
    </div>
  )
}
