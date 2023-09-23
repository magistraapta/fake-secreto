import React from 'react'

function Header() {
  return (
    <div className='h-[649px] flex flex-col justify-between '>
        <div>
        <h1 className=' text-[64px] font-bold'>Please leave me a <br /> message for me! </h1>
        <h3 className='text-[24px]'>You can say anything about me <br /> Don’t worry your name will show up as anonym.</h3>
        </div>
        
        <div className=''>
            <p>The server cost is so expensive. You can help me by give donation to me. Danke!</p>
        </div>
        
    </div>
  )
}

export default Header