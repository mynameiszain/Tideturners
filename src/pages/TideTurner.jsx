import React from 'react'
import Navbar from '../components/Navbar'
import TTsite_TTHeader_text from '../assets/TTsite/TTsite_TTHeader_text.png'
import TTsite_IGD_text from '../assets/TTsite/TTsite_IGD_text.png'
import TTsite_WAW_text from '../assets/TTsite/TTsite_WAW_text.png'
import MeetTeam from '../components/MeetTeam'
import GameSection from '../components/GameSection'
import ContactSection from '../components/ContactSection'
import TT_EmailSection from '../components/TT_EmailSection'
import Footer from '../components/Footer'
import { TTmenuItems } from '../api/api'


const TideTurner = () => {
  return (
    <>
    <Navbar items= {TTmenuItems} />

    <header className='header_height flex flex-col justify-stretch  items-center relative'>
        <div className='max-w-7xl mx-auto '>
            <div className='flex flex-col justify-center items-center'>
                <div className='mt-20 md:mt-16 lg:mt-12 xl:mt-auto'>
                    <img width={960} src={TTsite_TTHeader_text} alt="TTsite_TTHeader_text" />
                </div>

                <div>
                    <img width={660} src={TTsite_IGD_text} alt="TTsite_IGD_text" />
                </div>
            </div>

            <div class="ocean">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
        </div>
    </header>

    <section className='flex flex-col items-center py-[120px] px-5'>
        <div className='container max-w-7xl mx-auto'>
            <div>
                <div className='pb-10'>
                    <img width={960} className='mx-auto' src={TTsite_WAW_text} alt="Who We Are?" />
                </div>
                <div>
                    <p className='font-Verdana text-center leading-normal text-2xl'>
                        Tideturners  is a studio staffed by a global team of industry veterans making games that make memories.
                        We strive to create a gaming environment parents can trust through gameplay embedded in fun through learning, exploration, and creative problem solving.
                        What started as a collaboration between Unreal Engine experts, soon led to Epic games providing a Development Grant to further advance the operation and grow fast enough to match pace with the traction it has since gained.
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    <GameSection />
    <MeetTeam />
    <ContactSection />
    <TT_EmailSection />
    <Footer />
    </>
  )
}

export default TideTurner