import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import CurrencyFormat from 'react-currency-format';

function Product({ category, description, image, price, title, rating }) {
    let ratings = Array(Math.floor(rating.rate)).fill()
    return (
        <div className='relative flex flex-col m-5 bg-white p-10 z-30'>
            <p className=' absolute top-2 right-2 text-xs italic text-gray-400'>
                {category}
            </p>
            <Image src={image} width={200} height={200} alt={image} />
            <h4 className='my-3'>{title}</h4>
            <div className='flex items-center'>
                {
                    ratings?.map((_, i) =>
                        <StarIcon key={i} className='h-5 text-yellow-500' />
                    )
                }
            </div>
            <p className='text-xs my-2 line-clamp-2'>{description}</p>
            <div className='mb-5'>
                {/* <CurrencyFormat value={price * 50} prefix={'₹'} /> */}
                ₹{price * 50}

            </div>

            <button className='mt-auto button'>Add to Basket</button>


        </div>
    )
}

export default Product