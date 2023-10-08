import React from 'react'
import Image from "next/image";
const Header = ({ color, setColor }) => {
    return (
        <div>
            <div className={`w-full h-52 bg-${color} absolute`}>
                <div className='p-6 w-1/2 ml-10'>
                    <h1 className='text-white text-6xl   mb-3'>
                        Yash Nigam
                    </h1>
                    <div className='flex gap-4'>
                        <h3 className='bg-yellow-400 text-md rounded-md p-1 w-16'>Active</h3>
                        <h3>

                            <span className='text-white text-2xl' >user-Id: </span><span className='text-white text-2xl '>johndoe1985_ny</span>
                        </h3>
                    </div>
                    <div className='mt-4 flex gap-1'>
                        <button className='bg-rose-800 rounded-full border-2 border-white h-5 w-5' onClick={() => setColor("rose-800")}></button>
                        <button className='bg-cyan-800 rounded-full border-2 border-white h-5 w-5' onClick={() => setColor("cyan-800")}></button>
                        <button className='bg-emerald-700 rounded-full border-2 border-white h-5 w-5' onClick={() => setColor("emerald-700")}></button>
                        <button className='bg-blue-600 rounded-full border-2 border-white h-5 w-5' onClick={() => setColor("blue-600")}></button>
                    </div>

                </div>


            </div>
            <div className='flex justify-end px-20 py-20 '>
                <Image
                    src="/assets/profile2.jpg"
                    width={400}
                    height={400}
                    alt="Picture of the student"
                    className={`rounded-full border-4 border-${color} h-[200px] w-[200px] relative`}
                />
            </div>



        </div>


    )
}

export default Header