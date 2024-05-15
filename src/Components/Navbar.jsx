import React from 'react'
import Button from './Button'

function Navbar() {
    return (

        <div className='max-w-screen-xl mx-auto py-7 flex justify-between border-b-[0.1px] border-zinc-100'>

            <div className='flex'>

                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />

                
                <div className='links flex gap-16 ml-16'>
                    {
                        ["Home", "Work", "Culture", "", "News"].map((elem, index) => (
                            (elem.length === 0) ? (<span key={index} className='bg-zinc-100 w-px h-8'></span>) : (
                                <a key={index} href="#" className='text-sm flex gap-2 items-center'>
                                    {(index === 1) && (<span style={{ boxShadow: "rgb(0, 255, 25) 0px 0px 0.25em" }} className='inline-block w-1.5 h-1.5 bg-green-500 rounded-full'></span>)}
                                    {elem}
                                </a>
                            )
                        )
                        )}
                </div>

            </div>

            <Button />

        </div >

    )
}

export default Navbar      