import React, { useContext } from 'react'
import { productCartContext } from '../CartContext/CartContext'
import Button from '../Button/Button';
import { Link } from 'react-router';

export default function Cart() {
    const cartContent = useContext(productCartContext);
    const { removeFromCart,
        cartData,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        // getTotalItems,
        getTotalPrice,
        afterDiscountPrice } = cartContent;

    //   // Function to increase quantity
    //   const increaseQuantity = (id) => {
    //     const updatedCart = cartData.map(item => 
    //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    //     );
    //     setCartData(updatedCart);
    //   };

    //   // Function to decrease quantity
    //   const decreaseQuantity = (id) => {
    //     const updatedCart = cartData.map(item => 
    //       item.id === id && item.quantity > 1 
    //         ? { ...item, quantity: item.quantity - 1 } 
    //         : item
    //     );
    //     setCartData(updatedCart);
    //   };

    //   // Function to remove item from cart
    //   const removeItem = (id) => {
    //     const updatedCart = cartData.filter(item => item.id !== id);
    //     setCartData(updatedCart);
    //   };

    //   // Calculate total price
    //   const calculateTotal = () => {
    //     return cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
    //   };

    //   // Calculate subtotal (before any discounts)
    //   const calculateSubtotal = () => {
    //     return cartData.reduce((subtotal, item) => subtotal + (item.price * item.quantity), 0);
    //   };


   const orderNow = ( )=>{
    clearCart();
   }
    return (
        <div className='mx-4 sm:mx-6 lg:mx-10'>
            <h1 className='my-5 mb-10 text-2xl sm:text-3xl text-center text-amber-700'>Product Cart</h1>

            {Array.isArray(cartData) && cartData.length === 0 ? (
                <p className='text-center'>Your cart is empty</p>
            ) : (
                <div className='flex flex-col lg:flex-row lg:justify-between gap-6'>
                    <ul className='order-list-section flex-1'>
                        {cartData.map(item => (
                            <div key={item.id} className="rounded-lg border mb-5 border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                    <a href="#" className="shrink-0 md:order-1">
                                        <img className="h-20 w-20 dark:hidden" src={item.image} alt="product" />
                                        <img className="hidden h-20 w-20 dark:block" src={item.image} alt="product" />
                                    </a>

                                    <div className="flex items-center justify-between md:order-3 md:justify-end gap-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                className='text-xl font-bold'
                                                onClick={() => decreaseQuantity(item.id)}
                                            >
                                                -
                                            </button>
                                            <input
                                                className='w-12 text-center border rounded'
                                                type="number"
                                                value={item.quantity || 1}
                                                readOnly
                                            />
                                            <button
                                                className='text-xl font-bold'
                                                onClick={() => increaseQuantity(item.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="text-end md:order-4 md:w-32">
                                            <p className="text-base font-bold text-gray-900 dark:text-white">
                                                {(item.price * (item.quantity || 1)).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                        <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{item.title}</a>

                                        <div className="flex mt-2 flex-col sm:flex-row items-start sm:items-center gap-3">
                                            <button
                                                type="button"
                                                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                                            >
                                                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                                </svg>
                                                Add to Favorites
                                            </button>

                                            <button
                                                type="button"
                                                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                </svg>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>

                    <ul className='order-summery-section w-full lg:w-1/3'>
                        <div className="space-y-6">
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between">
                                            <dt className="text-base text-gray-500 dark:text-gray-400">Subtotal</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">
                                                {getTotalPrice()}
                                            </dd>
                                        </dl>
                                        <dl className="flex items-center justify-between">
                                            <dt className="text-base text-gray-500 dark:text-gray-400">Discount</dt>
                                            <dd className="text-base font-medium text-green-600">10%</dd>
                                             
                                        </dl>
                                        <dl className="flex items-center justify-between">
                                            <dt className="text-base text-gray-500 dark:text-gray-400">Shipping</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">$10.00</dd>
                                        </dl>

                                    </div>

                                    <dl className="flex items-center justify-between border-t pt-2 dark:border-gray-700">
                                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd className="text-base font-bold text-gray-900 dark:text-white">
                                            ${afterDiscountPrice()}
                                        </dd>
                                    </dl>
                                </div>

                                <a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Proceed to Checkout
                                </a>

                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm text-gray-500 dark:text-gray-400"> or </span>
                                    <Link to={'/product'} className="text-emerald-500 inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                        Continue Shopping
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>


                        </div>
                    </ul>
                </div>
            )}

            <div className="order text-center my-5">
            {
                  cartData.length !==0 ?  <Link to={'/order'}>
                <button onClick={orderNow} className='px-3 py-2 text-amber-50 rounded-3xl bg-cyan-600'>Order Now</button>
             </Link> : <Link to={'/product'}>
                <button className='px-3 py-2 text-amber-50 rounded-3xl bg-cyan-600'>Shop..</button>
             </Link>
            }
            </div>
        </div>
    )
}