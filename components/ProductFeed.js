import React from 'react'
import Product from "@/components/Product"

function ProductFeed({ products }) {
    return (
        <div className=' bg-gray-200 grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>{products.slice(0, 4)?.map(({ category, description, id, image, price, rating, title }) => <Product
            category={category} description={description} key={id} image={image} price={price} rating={rating} title={title}
        />)}
            <img
                className='md:col-span-full'
                src="https://links.papareact.com/dyz" alt="full pic" />


            {products.slice(4, products.length)?.map(({ category, description, id, image, price, rating, title }) => <Product
                category={category} description={description} key={id} image={image} price={price} rating={rating} title={title}
            />)}

        </div>
    )
}

export default ProductFeed