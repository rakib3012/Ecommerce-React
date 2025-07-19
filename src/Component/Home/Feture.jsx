 import React, { useContext } from 'react'
import { dataContext } from '../NavBar/NavBar'
 
import Button from '../Button/Button';
 
 export default function Feture() {
  const productData = useContext(dataContext);
  const {post,isLoading,error} = productData;
   return (
     <div>
        <div className="feture grid grid-cols-2 gap-10">
             
              {
              post?.map(product=><div>
                <div className="card border-2 border-amber-900 p-4  px-15">
                  <img className='feture-img' src={product.image} alt="img" />
                  <h1 className='py-3 mt-5'>{product.title}</h1>
                  <p>{product.price}</p>
                   <Button text={`Click here`}/>
                </div>
              </div>)
            }
           
        </div>
     </div>
   )
 }
 
