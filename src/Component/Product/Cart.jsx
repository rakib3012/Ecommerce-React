import React, { useContext } from 'react'
import { productCartContext } from '../CartContext/CartContext'
 
import Button from '../Button/Button'

export default function Cart() {
    const cartContent = useContext(productCartContext);
    const {cartData   }=cartContent ;
  return (
    <div>
        <h1 className='my-5 mb-10 text-3xl text-center text-amber-700'>Product Cart</h1>
        {
          Array.isArray(cartData) &&  cartData.length === 0 ?(
                <p>your cart is empty</p>
            ) : (
                <div>
                    <ul>
                         {
                         cartData.map(item => <div key={item.id}>
                          <div className="product-list flex justify-between mx-10 my-5">
                            <div className="img w-70 text-center">
                              <img className='w-15 p-3 border-1 border-amber-700 rounded-full' src={item.image} alt="image" />
                            </div>
                          <div className="title w-70 text-center ">
                            <span>{item.title}</span>
                          </div>
                         <div className="price w-70 text-center   ">
                           <span>{item.price}</span>
                         </div>
                          <div className="title w-70 text-center  ">
                            <span>{item.id}</span>
                          </div>

                          </div>
                          <hr />
                         </div>)
                         }
                    </ul>
                </div>
            )
        }

        <div className="order text-center my-5">
          <Button text={`Order Now`}></Button>
        </div>
    </div>
  )
}
