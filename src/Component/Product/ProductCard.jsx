

import { Link } from 'react-router';
import Button from '../Button/Button';
import { useContext } from 'react';
 
import { productCartContext } from '../CartContext/CartContext';
 

export default function ProductCard({ product }) {
  
  const { id, title, price, image } = product;
  const {AddToCartHandler}= useContext(productCartContext)



  return (
    <div className='mx-10 my-5'>
      <div className="card border-2 border-amber-700 p-2 shadow-lg shadow-pink-200
          hover:shadow-xl transition-shadow duration-300 rounded-md">
        <div className="w-64 h-48 bg-white flex items-center justify-center rounded-t-md overflow-hidden">
          <img
            className="w-full h-full object-contain"
            src={image}
            alt="image"
          />
        </div>
        <div className="c-body">
          <h1 className='my-2 ms-2'>
            Name: {title.length > 20 ? title.slice(0, 20) + '...' : title}
          </h1>
          <h4 className='my-2 ms-2'>Price : {price} $</h4>
           
        </div>
        <div className="div  flex justify-between">
          <Link id={id} to={`/Product/${id}`}>
            <button className='my-4 hover:bg-amber-400 hover:scale-105 transition-all duration-300" cursor-pointer border rounded-2xl bg-amber-700 text-amber-50 px-5 py-2'>See More</button>
          </Link>
          <span>
            <Link   to={'/cart'}>
      <button onClick={AddToCartHandler}>Add to cart</button>
            </Link>
          </span>
        </div>
      </div>
    </div>


  )
}
