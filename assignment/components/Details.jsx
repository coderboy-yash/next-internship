
import React, { useState } from 'react'
import Image from "next/image";

const Details = ({ color }) => {
  const [eye, setEye] = useState("eye");
  const [passwordType, setPasswordType] = useState("password");
  const [password, setPassword] = useState("the new intern");
  const showHide = () => {
    if (passwordType == "password") {
      setEye("eye1");
      setPasswordType("text");
    }
    else {
      setEye("eye");
      setPasswordType("password");
    }
  }
  return (
    <div className='flex mb-20 md:flex-row flex-col justify-center items-center' >
      <div className='flex  flex-wrap gap-8 m-8 w-2/3 md:w-full items-center'>
        <div className='flex md:m-8 h-14 w-64 '>
          <button className={`bg-${color} p-4 text-white capitalize`}>email</button>
          <input type="text" value={"nigamy911@gmail.com"} disabled className={`border-b-2 rounded-r-xl border-${color} bg-slate-200 p-4`} />
        </div>
        <div className='flex md:m-8 h-14 '>
          <button className={`bg-${color} p-4 text-white capitalize flex gap-1`} onClick={showHide}>password
            <Image
              src={`/assets/${eye}.svg`}
              width={400}
              height={400}
              alt="Picture of the student"
              className='rounded-full h-[30px] w-[30px] relative '
            /></button>
          <input type={`${passwordType}`} value={password} disabled className={`border-b-2 rounded-r-xl border-${color} bg-slate-200 p-3 w-64`} />
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <div className='md:m-8'>
          <button className={`btn bg-${color} p-4 flex items-center capitalize gap-4  text-white rounded-lg`} onClick={() => document.getElementById('my_modal_1').showModal()}> <span>change password</span> <span className={`text-white text-4xl font-bold`}>&rarr;</span></button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box h-1/3 ">
              <h3 className={`font-bold text-lg text-white p-4 bg-${color}`}>Chang password</h3>
              <div className='p-4'>
                <p className="py-4 text-slate-400">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='outline-none p-3 border-2 border-slate-400' />
                    <button className={`bg-${color} text-white p-3`}>Change</button>
                  </form>
                </div>
              </div>

            </div>
          </dialog>
        </div>
        




      </div>
      <div className={`md:w-1/2 m-4 w-2/3 border-2 rounded-2xl border-${color}    `}>
        <h1 className={`w-full text-white rounded-t-xl text-2xl p-4 bg-${color}`}>Quota details</h1>
        <div className='m-4'>
          <div className='text-xl capitalize'>
            total request quota alloted :
          </div> <span className={`text-${color}  font-medium text-2xl`}>1000 /month</span>
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