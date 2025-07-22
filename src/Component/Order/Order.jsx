import React from 'react'
import { Link } from 'react-router'

export default function Order() {
    return (
        <div>
            <div className="order py-10 text-3xl text-center  text-green-500">
                <p>thank you !!</p>
                <p className=''>your order is successfull</p>
                
            </div>
            <div className="move-to-shop text-2xl text-center ">
                <Link to={'/product'} className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                    Continue Shopping
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
