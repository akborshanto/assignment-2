import React from 'react'

const BallsLoading = () => {
  return (
    <div>
    <div className="flex justify-center items-center ">
      <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
      <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
      <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
    </div>
    </div>
  )
}

export default BallsLoading