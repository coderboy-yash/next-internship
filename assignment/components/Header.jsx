import React from 'react'
import Image from "next/image";
const Header = () => {
    return (
        <div>
            <div className='w-full h-52 bg-gradient-to-r from-indigo-500 to-blue-500 absolute'>
                <div className='p-6 w-1/2 ml-10'>
                    <h1 className='text-white text-6xl   mb-6'>
                        Yash Nigam
                    </h1>
                    <span className='text-white text-2xl' >user-Id: </span><span className='text-white text-2xl '>johndoe1985_ny</span>
                </div>


            </div>
            <div className='flex justify-end p-40 pt-20'>
                <Image
                    src="/assets/profile2.jpg"
                    width={400}
                    height={400}
                    alt="Picture of the student"
                    className='rounded-full border-4 border-blue-300 h-[200px] w-[200px] relative'
                />
            </div>



        </div>


    )
}

export default Header