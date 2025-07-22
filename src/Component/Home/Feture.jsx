 import React, { useContext } from 'react'
import { dataContext } from '../NavBar/NavBar'
 
import Button from '../Button/Button';
 
 export default function Feture() {
  const productData = useContext(dataContext);
  const {post } = productData;
  
   return (
     <div>
        <div className="feture grid grid-cols-2 gap-30">
             
              {
              post?.map(product=><div>
                <div className="card border-2 border-amber-900 p-4  px-10">
                 <div className="img w-64 h-48 overflow-hidden">
                   <img className='w-full h-full object-contain' src={product.image} alt="img" />
                 </div>
                  <h1 className='py-3 mt-5'>{product.title}</h1>
                  <p className='font-bold text-fuchsia-600'><span className='line-through pe-2 text-black'>{product.price +'$'}</span> 20% Off.</p>
                   <Button text={`Click here`}/>
                </div>
              </div>)
            }
           
        </div>
     </div>
   )
 }
 
