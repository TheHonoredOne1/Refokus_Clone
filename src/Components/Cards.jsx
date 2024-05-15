import React from 'react'
import Card from './Card'
function Cards() {
    return (
        <div className='w-full bg-zinc-900'>
            <div className='max-w-screen-xl mx-auto py-20 flex gap-3'>
                <Card width={"basis-2/5"} flag={true} heading={"Insights and behind the scenes"} />
                <Card width={"basis-3/5"} flag={false} hoverr="true" heading={"Let's get to it, together."} />
            </div>
        </div>

    )
}

export default Cards
