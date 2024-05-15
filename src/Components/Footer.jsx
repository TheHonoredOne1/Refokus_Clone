import React from 'react'

function Footer() {
    return (
        <div className='w-full bg-zinc-800'>
            <div className='max-w-screen-xl mx-auto py-10 flex gap-20'>
                <div className='basis-1/2'>
                    <h1 className='text-[11rem] font-semibold leading-none tracking-tight'>refokus.</h1>
                </div>


                <div className='basis-1/2 bg-zinc-800 gap-5 flex'>


                    <div className='basis-1/3'>
                        <h4 className='mb-10'>Socials</h4>
                        {["instagram", "twitter", "linkedin"].map((item, index) => <a className='block mt-3 text-zinc-500 capitlize'>{item}</a>)}
                    </div>


                    <div className='basis-1/3'>
                        <h4 className='mb-10'>Sitemaps</h4>
                        {["Home", "Work", "Careers", "Contact"].map((item, index) => <a className='block mt-3 text-zinc-500 capitlize'>{item}</a>)}
                    </div>

                    <div className='basis-1/3 flex flex-col items-end'>
                        <p className='text-right'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                        <img className='px-3 py-1 w-24 mt-10 bg-blue-800' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Footer
