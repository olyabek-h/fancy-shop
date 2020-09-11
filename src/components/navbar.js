import React from 'react'
import styles from './navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div className={styles['navbar']} >
            <FontAwesomeIcon icon={faBars} size='lg' />
            <div>
                <span>Comfy</span>
                <span>House</span>
            </div>
            <FontAwesomeIcon icon={faCartPlus} size='lg' />
        </div>
    )
}