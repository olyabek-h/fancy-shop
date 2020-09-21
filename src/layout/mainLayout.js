import React from 'react'
import Drawer from '../components/drawer'
import Navbar from '../components/navbar'

export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar />
            <Drawer />
            {children}
        </div>
    )
}
