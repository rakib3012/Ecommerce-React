import React, { useContext } from 'react'
import { productCartContext } from '../CartContext/CartContext'
export default function AddToCart() {
     const productInfo = useContext(productCartContext);
     console.log('cartdata'+ productInfo)
     if (!cartData || !cartData.title) {
    return <div>No Product in Cart</div>;
  }
     const {title, image, price} = productInfo;
  return (
    <div>
        <ul>
            <li>
                <span>{title}</span>
                <span>{image}</span>
                <span>{price}</span>
            </li>
        </ul>
    </div>
  )
}
