import React from 'react'
import { IoMdReturnRight } from "react-icons/io";

function Button() {
    return (
        <div className='min-w-40 px-4 py-1.5 text-black bg-zinc-100 rounded-full flex items-center justify-between'>
            <span>Start a Project</span>
            <IoMdReturnRight />
        </div>
    )
}

export default Button
