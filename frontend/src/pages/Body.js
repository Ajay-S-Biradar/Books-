import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Shimmer from './Shimmer';
import { apiCall } from '../utils/functions';

const Body = () => {
    const [books,setBooks] = useState();
    const [isLoading,setLoading] = useState(true);
    useEffect(()=>{
        apiCall(setLoading, setBooks);
    },[]);

  return (
    <div className='flex flex-wrap'>
        {isLoading? 
            <Shimmer /> : 
            books?.map((book)=>{
            return (<Card book={book} />)
        })
        }
    </div>
  )
}

export default Body