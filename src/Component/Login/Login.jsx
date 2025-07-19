import React from 'react'

export default function Login() {
    return (
        <div className='flex justify-center mt-50'>
            <div className="Login w-100 h-auto p-5 bg-emerald-600 text-amber-50">
                <label htmlFor="email">User Id</label>
                <br />
                <input className='outline-0 border-1 border-amber-50 text-2xl my-2' type="email" placeholder='Enter your email' />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input className='outline-0 border-1 border-amber-50 text-2xl my-2 mb-4' type="password" placeholder='Enter your password' />
                <br />
                <button className='border-2 px-5 py-2 rounded-2xl'>Login</button>
            </div>
        </div>
    )
}
