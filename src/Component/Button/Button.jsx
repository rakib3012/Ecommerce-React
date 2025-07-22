import React from 'react'
import { Link } from 'react-router'
 
  

export default function Button({text}) {
    const notify = () => toast("Poduct Added!");
  return (
    <div>
       
     <Link to={'/product'}>
      <button   className='my-4 border cursor-pointer rounded-2xl
       bg-amber-500 text-amber-50 px-3 py-2 
       hover:bg-amber-800 hover:scale-105 transition-all duration-300'>
        {text}
       </button>
       </Link>
      
       
    </div>
  )
}



