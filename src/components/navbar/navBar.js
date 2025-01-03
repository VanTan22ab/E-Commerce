import React from 'react'

export default function navBar() {
  return (
    <div className='w-full bg-cyan-50 m-2 grid grid-cols-5 place-items-center'>
      <div className=''>Logo</div>
      <div className='col-span-3'>Search</div>
      <div>User</div>
    </div>
  )
}
