import { motion } from 'framer-motion'
import React from 'react'
import { ImGift } from 'react-icons/im'
function Marquee({ urls }) {
    return (
        <div className='flex w-full py-8 overflow-hidden'>
            <motion.div initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 15, repeat: Infinity }} className='flex flex-shrink-0 gap-20 py-8 pr-40'>
                {urls.map((url, index) => <img key={index} src={url} className='w-36 flex-shrink-0' />)}
            </motion.div>
            <motion.div initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 15, repeat: Infinity }} className='flex flex-shrink-0 gap-20 py-8 pr-40'>
                {urls.map((url, index) => <img key={index} src={url} className='w-36 flex-shrink-0' />)}
            </motion.div>
        </div>
    )
}

export default Marquee
