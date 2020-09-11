import React from 'react'
import styles from './drawer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from '../context/dispatchContext'
import { useAppState } from '../context/appStateContext'
import { addedToCart, cartCleared, removedFromCart, toggleDrawer } from '../stateManager/actionCreator'
import ProductInCart from './productInCart'

export default function Drawer() {
    const dispatch = useDispatch();
    const { totalPrice, cart, products } = useAppState();

    function handleCloseDrawer() {
        dispatch(toggleDrawer());
    }

    function handleAddToCart(productId, productPrice) {
        dispatch(addedToCart(productId, productPrice));
    }

    function handleRemoveFromCart(productId, productCount, productPrice) {
        dispatch(removedFromCart(productId, productCount, productPrice));
    }

    function handleClearCart() {
        dispatch(cartCleared());
    }

    return (
        <div className={styles['drawer']} >
            <FontAwesomeIcon icon={faWindowClose} onClick={handleCloseDrawer} />
            <p>Your Cart</p>
            {cart.map(cartItem => {
                const product = products.find(product => product.id === cartItem.productId);
                return (
                    <ProductInCart
                        key={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        count={cartItem.count}
                        onAddToCart={() => handleAddToCart(product.id, product.price)}
                        onRemoveFromCart={() => handleRemoveFromCart(product.id, cartItem.count, product.price)}
                    />
                )

            })}
            <p>Your Total: <span>{totalPrice}</span> $</p>
            <button onClick={handleClearCart} >CLEAR CART</button>
        </div>
    )
}