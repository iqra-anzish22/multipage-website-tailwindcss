"use client";
import Link from 'next/link';
import React from 'react'



const Nvbar =() => {
  return (
    
        <nav className="flex flex-col sm:flex-row py-6 px-3 h-auto sm:h-12 md:h-16 lg:h-20 justify-between items-center bg-red-800">
  <div  className='mb-4 sm:mb-0'>
    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold bg-gray-800 rounded-lg p-2 cursor-pointer hover:bg-violet-700">IQra
       
    </h1>
  </div>
  <div className='w-full sm:w-auto  mb-4 sm:mb-0'>
  <ul className=" flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5">
    <li className="text-4xl cursor-pointer  font-semibold hover:text-blue-400"><Link href="/">Home</Link></li>
    <li className="text-4xl cursor-pointer font-semibold hover:text-blue-400"> <Link href="/About">About</Link></li>
    <li className="text-4xl cursor-pointer font-semibold hover:text-blue-400"> <Link href="/Contact">Contact</Link></li>
    
  </ul>
  </div>
  <button className="bg-gray-800 p-2  w-full sm:w-auto rounded-md cursor-pointer mb-4 sm:mb-0 text-lg sm:text-xl md:text-2xl   hover:bg-violet-700 lg:text-2xl">Follow for more</button>



</nav>














    
  )
}






  


export default Nvbar