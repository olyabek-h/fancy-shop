import React from 'react'
import Navbar from '../components/navbar'

export default function MainLayout({ Component }) {
    return (
        <div>
            <Navbar />
            <Component />
        </div>
    )
}
