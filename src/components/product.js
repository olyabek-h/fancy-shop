import React from 'react'
import styles from './product.module.scss'

export default function Product({ title, image, price, detail }) {
    return (
        <div>
            <div>
                <img src={image} alt={title} />
                <span>{title}</span>
            </div>
            <div>
                <span>Price:</span>
                <span>{price}</span>
            </div>
        </div>
    )
}