import React from 'react'
import { Link } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
  

export default function Button({text}) {
    const notify = () => toast("Poduct Added!");
  return (
    <div>
      <Link to={'/product'}>  
      <button onClick={notify} className='my-4 border rounded-2xl bg-amber-700 text-amber-50 px-5 py-2'>{text}</button></Link>
       <ToastContainer />
    </div>
  )
}



