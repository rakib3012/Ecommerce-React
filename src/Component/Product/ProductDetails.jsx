import { Link } from "react-router";
import { useParams, } from "react-router";
import { useState, useEffect, useContext } from "react";
import { productCartContext } from "../CartContext/CartContext";
 



export default function ProductDetails( ) {

 
 const {AddToCartHandler}= useContext(productCartContext)
  const productId = useParams();
  console.log('product details page er console productid type check params thaka pawa'+productId);
  const id = productId.productId;
  console.log('id check object thka '+id)
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id])

  const { title, image, price, description, } = product



  if (!product) return <div>Loading...</div>;


  return (
    <div className="flex justify-center ">
      <div className="card w-[60rem]   p-2 shadow-lg shadow-pink-200 hover:shadow-xl transition-shadow duration-300 rounded-md">
        <img className=' productDtailsImage ml-20 border-1 border-amber-700 w-[40rem] h-[30rem]  object-cover rounded-t-md' src={image} alt="image" />
        <h1 className='my-2'>Name : {title}</h1>
        <h4 className='my-2'>price : {price} </h4>
        <p>Description : {description}</p>
        <Link to={'/cart'} >
          <button onClick={()=>AddToCartHandler(product)} className=' my-4 border rounded-2xl bg-amber-700 text-amber-50 px-5 py-2'>Add to Cart</button>
        </Link>
      </div>
    </div>
  )
}
