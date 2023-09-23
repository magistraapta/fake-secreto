import React from 'react'
import MessageBox from './MessageBox'

export default function message() {
  return (
    <div className='h-[764px] items-baseline'>
        <div className='w-[549px] border border-black h-[659px] mb-3 p-6 rounded-md'>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
        </div>
        <div className='flex justify-between'>
            <input type="text" placeholder='send a message' className='w-8/12 border border-black rounded-md p-4'/>
            <button className='w-4/12 ml-2 p-2 rounded-md bg-green-600 text-white'>Send</button>
        </div>
    </div>
  )
}
