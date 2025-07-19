 import React, { useContext } from 'react'
import { dataContext } from '../NavBar/NavBar'
 
 export default function Blog() {

  const blogData = useContext(dataContext);
 console.log(blogData)
 const {post}=blogData

   return (
     <div>
      <div className="blog">
         {
          post.map(product=><div className='my-10 px-20 py-5'>
            <img className='image' src={product.image} alt="image" />
            <p className='my-4'>Name : {product.title}</p>
            <p className='my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quos eius tempora commodi 
              autem cum molestiae. Nam sit neque veniam dicta. Unde dicta deleniti molestias explicabo commodi quis 
              possimus ipsa, nisi voluptate, neque voluptas, exercitationem magni repellendus fuga? Alias aspernatur 
              voluptatem voluptate consectetur labore ut, recusandae officia. Aspernatur, odio tempora.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quos eius tempora commodi 
              autem cum molestiae. Nam sit neque veniam dicta. Unde dicta deleniti molestias explicabo commodi quis 
              possimus ipsa, nisi voluptate, neque voluptas, exercitationem magni repellendus fuga? Alias aspernatur 
              voluptatem voluptate consectetur labore ut, recusandae officia. Aspernatur, odio tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quos eius tempora commodi 
              autem cum molestiae. Nam sit neque veniam dicta. Unde dicta deleniti molestias explicabo commodi quis 
              possimus ipsa, nisi voluptate, neque voluptas, exercitationem magni repellendus fuga? Alias aspernatur 
              voluptatem voluptate consectetur labore ut, recusandae officia. Aspernatur, odio tempora.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quos eius tempora commodi 
              autem cum molestiae. Nam sit neque veniam dicta. Unde dicta deleniti molestias explicabo commodi quis 
              possimus ipsa, nisi voluptate, neque voluptas, exercitationem magni repellendus fuga? Alias aspernatur 
              voluptatem voluptate consectetur labore ut, recusandae officia. Aspernatur, odio tempora.</p>
              
              <hr />
          </div>)
         }
      </div>
     </div>
   )
 }
 