import React from 'react'
import styles from './productInCart.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function ProductInCart({ title, image, price, count, onAddToCart, onRemoveFromCart }) {

    return (
        <div className={styles['cart-item']} >
            <img src={image} alt={title} />
            <div>
                <h4>{title}</h4>
                <h5>{price}</h5>
                <span className={styles['remove-item']} >remove</span>
            </div>
            <div>
                <FontAwesomeIcon className={styles['icon']} icon={faChevronUp} onClick={onAddToCart} />
                <p className={styles['item-amount']} >{count}</p>
                <FontAwesomeIcon className={styles['icon']} icon={faChevronDown} onClick={onRemoveFromCart} />
            </div>
        </div>
    )
}