import React from 'react'
import Card from './Card'
function Cards() {
    return (
        <div className='w-full bg-zinc-800'>
            <div className='max-w-screen-xl mx-auto py-20 flex gap-3'>
                <Card width = {"basis-2/5"} flag = {true}/>
                <Card width = {"basis-3/5"} flag = {false}/>
            </div>
        </div>

    )
}

export default Cards
