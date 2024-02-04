import TTsite_CWU_text from '../assets/TTsite/TTsite_CWU_text.png'
import TTsite_socials_button_tt from '../assets/TTsite/TTsite_socials_button_tt.png'
import TTsite_socials_button_insta from '../assets/TTsite/TTsite_socials_button_insta.png'
import TTsite_socials_button_discord from '../assets/TTsite/TTsite_socials_button_discord.png'
import TTsite_socials_button_x from '../assets/TTsite/TTsite_socials_button_x.png'
import TTsite_socials_button_fb from '../assets/TTsite/TTsite_socials_button_fb.png'
import { Link } from 'react-router-dom'

const ContactSection = () => {
  return (
    <>
    <section className='pb-[120px] px-5' >
        <div className='container max-w-7xl mx-auto'>
            <div className=''>
                <div className='pb-10'>
                    <img width={960} className='mx-auto' src={TTsite_CWU_text} alt="Connect With Us" />
                </div>

                <ul className='flex items-center'>
                    <li><Link to={'https://www.tiktok.com/@TideturnersDev'}><img src={TTsite_socials_button_tt} alt="Tiktok" /></Link></li>
                    <li><Link to={'https://www.instagram.com/TideturnersDev/'}><img src={TTsite_socials_button_insta} alt="Instagram" /></Link></li>
                    <li><Link to={'https://www.discord.gg/qXMj2G7zkX'}><img src={TTsite_socials_button_discord} alt="Discord" /></Link></li>
                    <li><Link to={'https://twitter.com/TideturnersDev'}><img src={TTsite_socials_button_x} alt="X" /></Link></li>
                    <li><Link to={'https://www.facebook.com/TideturnersDev/'}><img src={TTsite_socials_button_fb} alt="Facebook" /></Link></li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactSection