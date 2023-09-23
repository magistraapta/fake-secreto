import React from 'react'

export default function MessageBox({message}) {
  return (
    <div className='border border-black w-full p-4 rounded-md mb-2'>
        <h1 className='font-bold'>anonymous</h1>
        <p>{message}</p>
    </div>
  )
}
