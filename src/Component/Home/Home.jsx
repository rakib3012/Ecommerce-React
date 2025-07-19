import React from 'react'
import Button from '../Button/Button'
import Feture from './Feture'

export default function Home() {
  return (
    <div className=''>
      <div className="div bg-blue-50">
        <div className="hero     px-30  pt-30 w-full h-100">
          <h1 className='text-5xl font-bold  text-pink-600'>Raining Offers For
            Hot Summer!</h1>
          <p className='my-5 text-3xl'>25% Off On All Products</p>
          <Button text={`Click here`}/>
        </div>
      </div>

      <div className="  justify-center  mx-10  mt-10">
        <h1 className=" text-4xl text-center text-orange-800 my-5">Feature Product</h1>
        <Feture />
      </div>

    </div>
  )
}
