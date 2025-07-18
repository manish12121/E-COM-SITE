import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className=' bg-blue-800 text-white py-3'>
            <div className="container mx-auto text-center">
                <p className='text-sm'> E-COM-SITE &copy; {currentYear}</p>
            </div>
        </footer>
    )
}
