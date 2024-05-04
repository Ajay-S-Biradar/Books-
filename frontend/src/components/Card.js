import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({book}) => {
  return (
    <div class="w-80 justify-between max-w-sm m-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/books/${book?.id}`} >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-[#5084bc]">{book?.title}</h5>
        </Link>
    </div>
  )
}

export default Card