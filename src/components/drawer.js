import React from 'react'
import styles from './drawer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

export default function Drawer() {
    return (
        <div>
            <FontAwesomeIcon icon={faWindowClose} />
            <p>Your Cart</p>
            <p>Your Total: <span></span> $</p>
            <button>CLEAR CART</button>
        </div>
    )
}