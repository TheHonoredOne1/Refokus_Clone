import React from 'react'
import Button from './Button'
function Product({ item, mover, ind }) {
    return (
        <div className='w-full py-20 h-[23rem]' >
            <div onMouseEnter={()=>{mover(ind)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
                <h1 className='text-5xl capitalize font-medium'>{item.title}</h1>
                <div className='dets w-1/4'>
                    <p className='mb-10'>{item.desc}</p>
                    <div className='flex gap-2'>
                        {item.live && <Button />}
                        {item.case && <Button title = "Case Study" />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
