import React from 'react'
import styles from './productInCart.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function ProductInCart({ title, image, price, count, onAddToCart, onRemoveFromCart }) {

    return (
        <div>
            <img src={image} alt={title} />
            <span>{title}</span>
            <span>{price}</span>
            <span>remove</span>
            <FontAwesomeIcon icon={faChevronUp} onClick={onAddToCart} />
            <span>{count}</span>
            <FontAwesomeIcon icon={faChevronDown} onClick={onRemoveFromCart} />
        </div>
    )
}