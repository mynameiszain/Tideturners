import React from 'react'
import { Link } from 'react-router-dom'

const HMR_Navbar = () => {
  return (
    <>
    <nav className='h-20 flex flex-col justify-center items-center'>
        <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div></div>
            <ul className='flex flex-wrap items-center justify-end gap-x-8 text-xl font-Verdana tracking-wide'>
                <Link to={'https://store.steampowered.com/app/2209340/Have_You_Herd/ '}><li className='font-semibold cursor-pointer'>WishList</li></Link>
                <li className='font-semibold cursor-pointer'>Features</li>
                <li className='font-semibold cursor-pointer'>Connect</li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default HMR_Navbar