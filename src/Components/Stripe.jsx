import React from 'react'

function Stripe({str}) {
    return (
        <div className='w-64 px-4  py-3 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-400 flex justify-between items-center'> 
            <span>
                <img src={str.url} alt="" />
            </span>
            <span>{str.number}</span>
        </div>
    )
}

export default Stripe