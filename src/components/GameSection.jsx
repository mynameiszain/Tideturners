import React from 'react'
import TTsite_logo_logos_HYH from '../assets/TTsite/TTsite_logo_logos_HYH.png'
import { Link } from 'react-router-dom'


const GameSection = () => {
  return (
    <section className='flex flex-col items-center px-5 py-[80px]'>
        <Link to={'/hmr'}><img  src={TTsite_logo_logos_HYH} alt="Image" /></Link>
    </section>
  )
}

export default GameSection