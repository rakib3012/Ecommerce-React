
 
import { Link } from 'react-router';

export default function ProductCard({ product }) {
  const { id, title, price, image } = product;
  return (
   <div className='mx-20'>
  <div className="card border-2 border-amber-700 p-2 shadow-lg shadow-pink-200 hover:shadow-xl transition-shadow duration-300 rounded-md">
    
     
    <div className="w-64 h-48 bg-white flex items-center justify-center rounded-t-md overflow-hidden">
      <img
        className="w-full h-full object-contain"
        src={image}
        alt="image"
      />
    </div>

        <h1 className='my-2'>
        Name: {title.length > 20 ? title.slice(0, 20) + '...' : title}
      </h1>

    <h4 className='my-2'>Price : {price} $</h4>
    <Link id={id} to={`/Product/${id}`}>
      <button className='my-4 border rounded-2xl bg-amber-700 text-amber-50 px-5 py-2'>See More</button>
    </Link>
  </div>
</div>


  )
}
