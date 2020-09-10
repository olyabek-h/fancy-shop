import React, { useEffect } from 'react'
import styles from './products.module.scss'
import Product from '../components/product'
import DATA from '../services/products.json'

export default function Products() {
    const INIT_DATA = DATA.items.map(item => {
        return {
            id: item.sys.id,
            title: item.fields.title,
            price: item.fields.price,
            image: item.fields.image.fields.file.url,
            detail: item.fields.detail,
        }
    })

    return (
        <div>
            <div>
                <h1>HERO IMAGE</h1>
                <img src="/images/hero-bcg.jpeg" />
            </div>

            <div>
                <h1>Our Products</h1>
                <div>
                    {INIT_DATA.map(product =>
                        <Product
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            detail={product.detail}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}