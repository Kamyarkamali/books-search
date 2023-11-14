import React from 'react'

function Selected() {
  return (
    <div className='max-w-[1500px] mx-auto flex justify-center mt-3'>
        <div>
        <input type="text" placeholder='میان کتاب ها بگرد' className='border-gray-400 border-[1px] outline-none p-1 rounded-md text-blue-600'/>
        <select className='border-[1px] mr-3 rounded-lg bg-blue-300'>
            <option value="">تاریخی</option>
            <option value="">رمان</option>
            <option value="">علمی</option>
            <option value="">کودکان</option>
            <option value="">بزرگسالات</option>
        </select>
        </div>
    </div>
  )
}

export default Selected