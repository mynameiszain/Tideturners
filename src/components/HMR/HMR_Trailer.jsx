import React from 'react'
import ReactPlayer from 'react-player'
import HYHsite_trailer1_1080p from '../../assets/HYHsite/HYHsite_trailer1_1080p.mp4'
import HYHsite_wishlistbutton from '../../assets/HYHsite/HYHsite_wishlistbutton.png'
import { Link } from 'react-router-dom'
import Paper from '../../assets/HYHsite/Paper.webp'

const HMR_Trailer = () => {
  return (
    <>
    <section className='pt-[60px] relative min-h-[650px] lg:min-h-[1000px]  bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${Paper})` }}>
        <div className='container max-w-7xl mx-auto space-y-14'>
            <div className='flex justify-center items-center px-4 border-[16px] border-white drop-shadow-lg max-w-[1000px] mx-auto'>
                <ReactPlayer 
                controls={true}
                light={true} 
                volume={0} 
                muted={true} 
                width={1000} 
                height="100%" 
                url={HYHsite_trailer1_1080p}
                style={{ margin: '0 auto', objectFit: 'cover' }}
                />
            </div>

            <div className='flex justify-center items-center px-4'>
                <Link to={'https://store.steampowered.com/app/2209340/Have_You_Herd/'}  target="_blank" rel="noopener noreferrer">
                  <div>
                    <img width={400} src={HYHsite_wishlistbutton} alt="Wishlist" />
                  </div>
                </Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default HMR_Trailer