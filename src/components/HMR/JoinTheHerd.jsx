import HYHsite_JTH_text from '../../assets/HYHsite/HYHsite_JTH_text.png'
import Paper from '../../assets/HYHsite/Paper.webp'
import HYHsite_socials_button_tt from '../../assets/HYHsite/HYHsite_socials_button_tt.png'
import HYHsite_socials_button_insta from '../../assets/HYHsite/HYHsite_socials_button_insta.png'
import HYHsite_socials_button_x from '../../assets/HYHsite/HYHsite_socials_button_x.png'
import HYHsite_socials_button_fb from '../../assets/HYHsite/HYHsite_socials_button_fb.png'
import HYHsite_dogsheepchase_dog from '../../assets/HYHsite/HYHsite_dogsheepchase_dog.png'
import HYHsite_dogsheepchase_sheep from '../../assets/HYHsite/HYHsite_dogsheepchase_sheep.png'
import HYHsite_dogsheepchase_discord from '../../assets/HYHsite/HYHsite_dogsheepchase_discord.png'

const JoinTheHerd = () => {
  return (
    <>
    <section className="pt-[60px] relative min-h-[650px] lg:min-h-[1400px]  bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Paper})` }}>
        <div className='container max-w-7xl mx-auto'>
            <div className='flex flex-col items-center space-y-10 px-4'>
                <div>
                    <img width={960} src={HYHsite_JTH_text} alt="HYHsite_JTH_text" />
                </div>

                <div className='flex items-center'>
                    <div><img src={HYHsite_dogsheepchase_dog} alt="" /></div>
                    <div><img src={HYHsite_dogsheepchase_sheep} alt="HYHsite_dogsheepchase_sheep" /></div>
                    <div><img src={HYHsite_dogsheepchase_discord} alt="HYHsite_dogsheepchase_discord" /></div>
                </div>

                <div className='w-full space-y-8'>
                    <div className='flex justify-center items-center h-20 w-full drop-shadow-2xl '>
                        <div className='h-full w-full'>
                            <input type="text" className='h-full w-full outline-none border-none px-8 text-xl' />
                        </div>
                        <div className='lg:w-96 w-56 h-full bg-[#BC5037] flex flex-col items-center justify-center cursor-pointer'>
                            <button className='font-freeboot text-3xl lg:text-6xl text-center text-shadow text-white'>Herd Up</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-5 gap-x-6 lg:gap-x-12 justify-between items-center'>
                        <div>
                            <img src={HYHsite_socials_button_tt} alt="HYHsite_socials_button_tt" />
                        </div>
                        <div>
                            <img src={HYHsite_socials_button_insta} alt="HYHsite_socials_button_tt" />
                        </div>
                        <div>
                            <img src={HYHsite_dogsheepchase_discord} alt="HYHsite_dogsheepchase_discord" />
                        </div>
                        <div>
                            <img src={HYHsite_socials_button_x} alt="HYHsite_socials_button_x" />
                        </div>
                        <div>
                            <img src={HYHsite_socials_button_fb} alt="HYHsite_socials_button_fb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default JoinTheHerd