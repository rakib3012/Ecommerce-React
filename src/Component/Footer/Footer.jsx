import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-sky-800 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
         
        <div>
          <h1 className="text-2xl font-bold mb-2">MyBrand</h1>
          <p className="text-sm text-gray-200">We provide quality products and services to make your life better.</p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/product" className="hover:text-gray-300">Products</a></li>
            <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
 
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: info@mybrand.com</p>
          <p className="text-sm">Phone: +880 1234 567 890</p>
          <p className="text-sm">Address: Dhaka, Bangladesh</p>
        </div>
      </div>
 
      <div className="mt-8  pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  )
}