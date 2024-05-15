import { motion } from 'framer-motion'
import React from 'react'
import { ImGift } from 'react-icons/im'
function Marquee({ urls, direction }) {
    return (
        <div className='flex w-full py-8 overflow-hidden'>
            <motion.div
                initial={{ x: direction === "left" ? "0" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                className="flex flex-shrink-0 gap-40 py-10 pr-40"
            >
                {urls.map((url, index) => <img key={index} src={url} className='w-36 flex-shrink-0' />)}
            </motion.div>
            <motion.div
                initial={{ x: direction === "left" ? "0" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                className="flex flex-shrink-0 gap-40 py-10 pr-40"
            > 
            {urls.map((url, index) => <img key={index} src={url} className='w-36 flex-shrink-0' />)}
            </motion.div>
        </div>
    )
}

export default Marquee
