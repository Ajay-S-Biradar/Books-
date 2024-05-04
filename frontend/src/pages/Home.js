import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='relative'>
        <img src='https://www.creativefabrica.com/wp-content/uploads/2022/05/20/There-is-no-such-thing-as-too-many-books-Graphics-30883211-1-1.jpg' />
        <div className='absolute top-1/3 right-20'>
            <Link to={`/books`} class="text-lg inline-flex items-center px-3 py-2 font-medium text-center  bg-gray-400 rounded-lg hover:bg-[#e2cd9e] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View All Books
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>
  )
}

export default Home