import React from 'react'

const Footer = ({color}) => {
    return (
        <div className={`w-full bg-${color} h-10 mt-10 flex justify-center text-white text- p-3 gap-8`}>
            <span>contact me: 8957655061</span>
            <span>email: nigamy911@gmail.com</span>
            
        </div>
    )
}

export default Footer