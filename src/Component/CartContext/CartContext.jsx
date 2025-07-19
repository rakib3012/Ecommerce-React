import React, { createContext, useState } from 'react'
 
 

 export const productCartContext = createContext();

 export default function CartContext({children}) {
     
     const [cartData, setCartData] = useState([]);

     const AddToCartHandler = (product)=>{
        
         setCartData((prevItem)=>{
            console.log('setCardData'+'-' + prevItem)
            const isItem = prevItem.find(item=> item.id === product.id);
            console.log(isItem + 'titem chechk')
            if(isItem){
                
                 const data=   prevItem.map(item=>item.id==product.id?{ ...item, Quantity : item.Quantity+1} : item)
                
                return data
            }
            else{
              return  [...prevItem,{ ...product , quantity:1} ]
            }
         })
     }


 
 return(
    <div className="div">
        <productCartContext.Provider value={{cartData, AddToCartHandler,    }}>
            {children}
        </productCartContext.Provider>
    </div>
 )
}
