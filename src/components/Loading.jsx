import React from 'react'
import Load from "../assets/loading.svg"

const Loading = () => {
  return (
    <div className='load'>
        <img src={Load} alt="loading" />
    </div>
  )
}

export default Loading