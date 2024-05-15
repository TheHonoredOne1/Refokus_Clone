import React from 'react'
import { ImGift } from 'react-icons/im'

function Marquee({ urls }) {
    return (
        <div className='flex w-full py-9 gap-20 overflow-hidden'>
            {urls.map((url) => <img src={url} className='w-36 flex-shrink-0'/> )}
        </div>
    )
}

export default Marquee
