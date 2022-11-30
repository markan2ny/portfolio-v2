import React from 'react'
import * as Fa from 'react-icons/fa'

export const Scroll = () => {
  return (
    <div className='absolute bottom-10'>
      <a href="#about">
        <span className='text-sm text-slate-400 font-bold'>Scroll Down</span>
        <div className='mx-auto mt-2 block border-slate-500 relative'>
          <Fa.FaArrowDown className='text-slate-400 m-auto animate-bounce' />
        </div>
      </a>
    </div>
  )
}
