import React from 'react'
import styles from './navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from '../context/dispatchContext'
import { useAppState } from '../context/appStateContext'
import { toggleDrawer } from '../stateManager/actionCreator'

export default function Navbar() {
    const dispatch = useDispatch();
    const { cart } = useAppState();

    function handleCartClick() {
        dispatch(toggleDrawer());
    }

    return (
        <div className={styles['navbar']} >
            <div className={styles['navbar-center']} >
                <div className={styles['icon']}>
                    <FontAwesomeIcon icon={faBars} size='lg' />
                </div>
                <img src="/images/logo.svg" alt="comfy_house_logo" />
                <div className={styles['cart-btn']}>
                    <div className={styles['icon']}>
                        <FontAwesomeIcon icon={faCartPlus} size='lg' onClick={handleCartClick} />
                    </div>
                    <span className={styles['cart-items']}>{cart.length === 0 ? '' : cart.length}</span>
                </div>
            </div>
        </div>
    )
}