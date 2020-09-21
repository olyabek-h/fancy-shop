import React from 'react'
import styles from './product.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom'

export default function Product({ id, title, image, price, onAddToCart, onProductClick }) {
    const history = useHistory();

    function handleProductClick() {
        history.push(`/detail/${id}`);
    }

    return (
        <div className={styles['product']} >
            {/* <Link to={`/detail/${id}`} > */}
            <div className={styles['img-container']} onClick={onProductClick} >
                <img className={styles['product-img']} src={image} alt={title} />

                <button className={styles['bag-btn']} onClick={e => onAddToCart(e)} >
                    <FontAwesomeIcon className={styles['icon']} icon={faShoppingCart} />
                    <span> ADD TO CART </span>
                    <FontAwesomeIcon className={styles['icon']} icon={faShoppingCart} />
                </button>
                <h3>{title}</h3>
            </div>
            {/* </Link> */}

        </div >
    )
}