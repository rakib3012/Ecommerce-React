import React, { createContext, useState } from 'react'

export const productCartContext = createContext();

export default function CartContext({ children }) {
    const [cartData, setCartData] = useState([]);


    const AddToCartHandler = (product) => {
        setCartData((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartData(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCartData(prevItems =>
            prevItems.map(item =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCartData(prevItems =>
            prevItems.map(item =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartData([]);
    };

    const getTotalItems = () => {
        return cartData.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        const total = cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
        return parseFloat(total.toFixed(2));
    };

    const afterDiscountPrice = () => {
         
            const totalPrice = getTotalPrice();
             console.log(totalPrice+'afterdiscount')
            const discountPrice = totalPrice * 0.10;
             console.log(discountPrice+'afterdiscount+++++++')

            const afterDiscountPrice = totalPrice - discountPrice;
             console.log(afterDiscountPrice+'afterdiscountpppppp')

            const finalPrice = afterDiscountPrice + 5;

            //  parseFloat(afterDiscountPrice.toFixed(2))
                console.log(finalPrice+'*/**/')

        return parseFloat(afterDiscountPrice.toFixed(2))
    }

    console.log('gettotal price ' + getTotalPrice)
    console.log('gettotal item ' + getTotalItems)

    return (
        <productCartContext.Provider
            value={{
                cartData,
                setCartData,
                AddToCartHandler,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
                getTotalItems,
                getTotalPrice,
                afterDiscountPrice
            }}
        >
            {children}
        </productCartContext.Provider>
    );
}