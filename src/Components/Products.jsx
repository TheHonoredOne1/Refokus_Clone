import React from 'react'
import Product from './Product'
function Products() {

    let products = [
        { title: "Arquitel", url: "", desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false },
        { title: "TTR", url: "", desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: false },
        { title: "YIR 2022", url: "", desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live: false, case: true },
        { title: "Yahoo !", url: "", desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: true, case: true },
        { title: "Rainfall", url: "", desc: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.", live: true, case: false },
    ]


    return (
        <div className='bg-zinc-800 flex flex-col items-center justify-center'>
            {
                products.map((elem, index) => <Product key = {index} item = {elem} />)
            }
        </div>
    )
}

export default Products
