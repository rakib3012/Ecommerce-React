 
import { Link, NavLink } from 'react-router-dom'
import'./Nav.css'

export default function Nav() {
  return (
    <div className=''>
        <ul className='flex gap-6 justify-center bg-sky-800 py-3 text-2xl text-amber-50'>
            <li><NavLink to='/home'>Home</NavLink> </li>
            <li><NavLink className={({isActive})=>isActive?'active' : "non-activ"  } to='/product'>Product</NavLink> </li>
            <li><NavLink to='/blog'>Blog</NavLink> </li>
            <li><NavLink to='/contact'>Contact</NavLink> </li>
        </ul>
        <br />
    </div>
  )
}
