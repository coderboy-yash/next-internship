import React from 'react'

const Details = ({color}) => {
  return (
    <div className='flex mb-20' >
      <div className='flex flex-wrap gap-8 m-8'>
        <div className='flex m-8 h-14 '>
          <button className={`bg-${color} p-4 text-white capitalize`}>email</button>
          <input type="text" value={"nigamy911@gmail.com"} disabled className={`border-b-2 rounded-r-xl border-${color} bg-slate-200 p-4`} />
        </div>
        <div className='flex m-8 h-14'>
          <button className={`bg-${color} p-4 text-white capitalize`}>password</button>
          <input type="password" value={"nigamy911@gmail.com"} disabled className={`border-b-2 rounded-r-xl border-${color} bg-slate-200 p-4`} />
        </div>


      </div>
      <div className={`w-96  border-2 rounded-2xl border-${color}    `}>
        <h1 className={`w-full text-white rounded-t-xl text-2xl p-4 bg-${color}`}>Quota details</h1>
        <div className='m-4'>
        <div className='text-xl capitalize'>
      total request quota alloted :
        </div> <span className={`text-${color} font-medium text-2xl`}>1000 /month</span>
        </div>
     
        <div className='m-4 flex flex-col gap-8'>

<div>
<h1>quota used </h1>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 ">
          <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full w-[45%]" > 45%</div>
        </div>
</div>
       
       <div>
       <h1>quota left</h1>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full w-[55%]" > 55%</div>
        </div>
       </div>
       
        </div>
      </div>


    </div>

  )
}

export default Details