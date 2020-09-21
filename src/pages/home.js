import React from 'react'
import styles from './home.module.scss'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className={styles['hero']} >
            <div className={styles['banner']} >

                <h1 className={styles['banner-title']} >furniture collection</h1>
                <Link to='/products' >
                    <button className={styles['banner-btn']} >SHOP NOW</button>
                </Link>
            </div>
        </div>
    )
}