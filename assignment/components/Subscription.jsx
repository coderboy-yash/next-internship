"use client"
import React, { useState } from 'react'
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
const Subscription = ({ color }) => {
    const [pay,setPay]=useState(false);
    const upgradePlan=()=>{
        setPay(true);
        toast.success("payment successful")
    }
    return (
        <div className=''>
              <Toaster></Toaster>
            <div className='mb-10 flex items-center md:flex-row flex-col justify-center md:justify-start '>
                <div className={`text-2xl font-bold text-${color}  shadow-sm shadow-slate-500 w-80 md:w-1/4 p-4 m-4 mb-10 rounded-2xl`}>Subscription details &rarr;</div>
                <div className={`shadow-sm  p-6 m-4   shadow-slate-500 rounded-2xl capitalize text-xl border-b-2 border-r-4 border-${color}  `}>
                    <div className='flex gap-3 justify-start mb-4 '>
                        <span className={`text-${color} text-xl`}>plan type: </span> <span className='text-gray-500 font-semibold'>{pay?<h1>Hobby</h1>: <h1>Trial</h1> }</span>


                        <span className={`text-${color} text-xl`}>plan price: </span> <span className='text-gray-500 font-semibold'>{pay? <h1>40.0 USD</h1>: <h1>0.0 USD</h1> } </span>

                    </div>
                    <div className='flex gap-3 justify-center'>
                        <span className={`text-${color} text-xl`}>Started at: </span> <span className='text-gray-500 font-semibold'>26 sept 2022</span>


                        <span className={`text-${color} text-xl`}>renewed at: </span> <span className='text-gray-500 font-semibold'>{pay?<h1>8 oct 2023</h1>:<h1>1 sept 2023</h1> }</span>

                    </div>


                </div>
            </div>

            <div className='flex items-center justify-center md:flex-row flex-col gap-16'>

                <div className="w-full max-w-sm relative shadow-lg shadow-slate-500 p-4 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                    <div className={`text-white bg-${color} w-14 absolute -left-10 rounded-md -top-7 p-2`}>Trial</div>
                    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Current plan </h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-5xl font-extrabold tracking-tight">0.0 </span>
                        <span className="text-3xl font-semibold ml-2">USD</span>
                        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul role="list" className="space-y-5 my-7">
                        <li className="flex space-x-3 items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">request limit : 1000/month</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
                        </li>

                        <li className="flex space-x-3 items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">api access 24 hours</span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
                        </li>
                    </ul>
                    <button type="button" className={`text-white bg-${color} hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center`}>Upgrade plan</button>
                </div>
                <div className="w-full max-w-sm shadow-lg shadow-slate-500 relative p-4 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                    <div className={`text-white bg-${color} gap-2 flex absolute -left-10 rounded-md -top-10 items-center p-2`}>
                        <Image
                            src="/assets/king.png"
                            width={400}
                            height={400}
                            alt="Picture of the student"
                            className='rounded-full h-[40px] w-[40px] relative '
                        />
                        Hobby
                    </div>
                    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Best plan </h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-5xl font-extrabold tracking-tight">40.0 </span>
                        <span className="text-3xl font-semibold ml-2">USD</span>
                        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul role="list" className="space-y-5 my-7">
                        <li className="flex space-x-3 items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-4 h-4 text-green-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">request limit : 100000/month</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
                        </li>

                        <li className="flex space-x-3 items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">api access 24 hours</span>
                        </li>
                        <li className="flex space-x-3  decoration-gray-500">
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
                        </li>
                        <li className="flex space-x-3  decoration-gray-500">
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
                        </li>
                    </ul>
                    {/* <button type="button" className={`text-white bg-${color} hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center`}>Buy Now</button> */}
                 
                        <button className={`btn text-white bg-${color} hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5  flex justify-center w-full text-center`} onClick={() => document.getElementById('my_modal_2').showModal()}> Buy now </button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box h-1/3 ">
                                <h3 className={`font-bold text-lg text-white p-4 bg-${color}`}>Upgrade plan</h3>
                                <div className='p-4'>
                                    <p className="py-4 text-slate-400">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <input type="text" value="40 USD" disabled className={`border-2 border-${color} p-3`} />
                                            <button onClick={upgradePlan} className={`bg-${color} text-white p-3`}>Pay now</button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </dialog>
              
                </div>

            </div>
        </div>



    )
}

export default Subscription