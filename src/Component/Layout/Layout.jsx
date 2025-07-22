



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from '../Home/Home';
import Product from '../Product/Product';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import NavBar from "../NavBar/NavBar";
import ProductDetails from "../Product/ProductDetails";
import AddToCart from "../AddToCart/AddToCart";
import CartContext from "../CartContext/CartContext";
import Cart from "../Product/Cart";
import Shipping from "../NavBar/Shipping/Shipping";
import Order from "../Order/Order";
 





export default function Layout() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
         
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/product',
          element: <Product />
        },
        {
          path: '/product/:productId',
           
          element: <ProductDetails />
        },
      
        {
          path:'/addtocart',
          element: <AddToCart/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/contact',
          element: <Contact />
        },
          {
          path : '/order',
           
          element : <Order />
        },
      ]
    },

  ]);


  return (
    <div>
       

      <CartContext>

      <RouterProvider router={router}></RouterProvider>
      </CartContext>






    </div>
  )
}
