import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ width, flag, hoverr = "false", headings }) {
    return (
        <motion.div whileHover={{ backgroundColor: hoverr === "true" && "#7443ff", padding: "25px" }} className={`${width} bg-zinc-800 p-5 rounded-xl flex flex-col justify-between`}>
            <div className='w-full'>
                <div className='w-full flex items-center justify-between'>
                    <h3>Get in Touch</h3>
                    <FaArrowRightLong />
                </div>
                <h1 className='text-3xl font-medium mt-8'> {headings}</h1>
            </div>
            <div className='down w-full mt-60'>
                {
                    (!flag) ? (
                        <>
                            <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project</h1>
                            <button className='rounded-full mt-5 px-3 py-2 border-[1px] border-zinc-50'>Contact Us</button>
                        </>
                    ) :
                        (
                            <p className='text-sm text-zinc-300 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        )
                }




            </div>
        </motion.div >
    )
}

export default Card
