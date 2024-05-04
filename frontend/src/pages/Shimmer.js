import React from 'react'
import ShimmerCard from '../components/ShimmerCard'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap justify-around'>
      {Array(40).fill("").map((x,ind)=>{
        return(<ShimmerCard key={ind} />)
      })}
    </div>
  )
}

export default Shimmer