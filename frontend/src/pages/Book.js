import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { apiBookCall } from '../utils/functions';
import ShimmerCard from '../components/ShimmerCard';

const Book = () => {
    const {id} = useParams();
    const [book,setBook] = useState();
    useEffect(()=>{
        apiBookCall(id,setBook);
    },[]);

  return (
    <div className='p-10 mt-10 rounded-xl shadow-md flex flex-col w-full h-[70vh] bg-[#f4f3f2]'>
        { book ?
        <>
        <div className='my-5'>
            <h1 className='text-3xl font-semibold italic'>{book?.title}</h1>
        </div>
        <div className='my-3'>
            <h1 className='font-medium'>ISBN: {book?.isbn} </h1>
        </div>
        <div className='my-3'>
            <h1 className='font-medium'>Page Count: {book?.pageCount}</h1>
        </div>
        <div className='my-3'>
            <h1 className='font-medium'>Authors: </h1>
            <div className='my-2'>
                { book?.authors.map((x,ind)=>{
                    return (<h1 className='font-medium' key={ind}>- {x}</h1>)
                })}
            </div>
        </div>
        </>
         : 
         <ShimmerCard />
    }
    </div>
  )
}

export default Book