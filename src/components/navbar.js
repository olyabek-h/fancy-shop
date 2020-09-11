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
            <FontAwesomeIcon icon={faBars} size='lg' />
            <div>
                <span>Comfy</span>
                <span>House</span>
            </div>
            <FontAwesomeIcon icon={faCartPlus} size='lg' onClick={handleCartClick} />
            <span>{cart.length === 0 ? '' : cart.length}</span>
        </div>
    )
}