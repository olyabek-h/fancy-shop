import React from 'react'
import styles from './drawer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from '../context/dispatchContext'
import { useAppState } from '../context/appStateContext'
import { addedToCart, cartCleared, removedFromCart, toggleDrawer } from '../stateManager/actionCreator'
import ProductInCart from './productInCart'
import classNames from 'classnames'

export default function Drawer() {
    const dispatch = useDispatch();
    const { totalPrice, cart, products, isDrawerOpen } = useAppState();

    const drawerClassName = classNames({
        [styles['cart-overlay']]: true,
        [styles['transparentBcg']]: isDrawerOpen,
    })
    const containerClassName = classNames({
        [styles['cart']]: true,
        [styles['showCart']]: isDrawerOpen,
    })

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
        <>
            <div className={drawerClassName} onClick={handleCloseDrawer} >
            </div>
            <div className={containerClassName} >
                <FontAwesomeIcon className={styles['close-cart']} icon={faWindowClose} onClick={handleCloseDrawer} />
                <h2>your cart</h2>
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
                <div className={styles['cart-footer']} >
                    <h3>your yotal: <span >{totalPrice}</span> $</h3>
                    <button className={styles['banner-btn']} onClick={handleClearCart} >CLEAR CART</button>

                </div>
            </div>
        </>
    )
}