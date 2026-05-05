import React from 'react'
import { GrGithub } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="bg-white border-t border-green-500 mt-10">
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
      
      {/* <!-- Brand --> */}
      <div>
        <h2 className="text-xl font-bold text-green-600">Author Social Media Links</h2>
        <ul className='flex flex-col gap-2 mt-5'>
          <li><a href="https://github.com/nabeel-builds" target='_blank' className='text-gray-600 hover:text-green-600 text-lg font-semibold'>Github</a></li>
          <li><a href="https://www.linkedin.com/in/nabeel-ahmad-8a818a384/" target='_blank' className='text-gray-600 hover:text-green-600 text-lg font-semibold'>Linkdin</a></li>
          <li><a href="https://x.com/Nabeeel0786" target='_blank' className='text-gray-600 hover:text-green-600 text-lg font-semibold'>X</a></li>
        </ul>
      </div>

      {/* <!-- Quick Links --> */}
      <div>
        <h3 className="text-lg font-semibold text-green-600 mb-3">Quick Links</h3>
        <ul className="space-y-2 text-gray-600">
            
          <li><a href="#" className="hover:text-green-600">Home</a></li>
          <li><a href="#" className="hover:text-green-600">Menu</a></li>
          <li><a href="#" className="hover:text-green-600">Offers</a></li>
          <li><a href="#" className="hover:text-green-600">Contact</a></li>
        </ul>
      </div>

      {/* <!-- Popular Categories --> */}
      <div>
        <h3 className="text-lg font-semibold text-green-600 mb-3">Popular Foods</h3>
        <ul className="space-y-2 text-gray-600">
          <li>Pizza</li>
          <li>Burgers</li>
          <li>Soups</li>
          <li>Main Course</li>
        </ul>
      </div>

      {/* <!-- App / Newsletter --> */}
      <div>
        <h3 className="text-lg font-semibold text-green-600 mb-3">Get Our App</h3>
        <p className="text-gray-600 mb-3">Download app for faster ordering</p>
        <div className="flex gap-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer">Android</button>
          <button className="border border-green-500 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 cursor-pointer">iOS</button>
        </div>
      </div>

    </div>

    {/* <!-- Bottom --> */}
    <div className="border-t border-green-200 text-center py-4 text-gray-500">
      © 2026 FoodieExpress. All rights reserved.
    </div>
  </footer>
    </div>
  )
}

export default Footer