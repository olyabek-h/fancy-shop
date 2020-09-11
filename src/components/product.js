import React from 'react'
import styles from './product.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Product({ title, image, price, onAddToCart, onProductClick }) {
    return (
        <div onClick={onProductClick} >
            <div>
                <img src={image} alt={title} />
                <span>{title}</span>
            </div>
            <div onClick={e => onAddToCart(e)} >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span> ADD TO CART </span>
                <FontAwesomeIcon icon={faShoppingCart} />
                {/* <span>Price:</span>
                <span>{price}</span> */}
            </div>
        </div>
    )
}