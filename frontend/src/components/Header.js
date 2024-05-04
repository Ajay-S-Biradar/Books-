import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-[#fdefe1] text-2xl pb-10 rounded-xl p-3 font-bold flex justify-between px-5 font-serif'>
      <div>
        Book World
      </div>
      <div className='flex gap-6 mr-10'>
        <Link to={'/'} >
          <h1 className='cursor-pointer'>Home</h1>
        </Link>
        <Link to={'/books'} >
          <h1 className='cursor-pointer'>All Books</h1>
        </Link>
      </div>
    </div>
  )
}

export default Header