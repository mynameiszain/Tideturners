import HYHsite_PUPC_text from '../../assets/HYHsite/HYHsite_PUPC_text.png'
import Paper from '../../assets/HYHsite/Paper.webp'
import HYHsite_dogsheepchase_dog from '../../assets/HYHsite/HYHsite_dogsheepchase_dog.png'
import HYHsite_dogsheepchase_sheep from '../../assets/HYHsite/HYHsite_dogsheepchase_sheep.png'
import HYHsite_setdressing_paw from '../../assets/HYHsite/HYHsite_setdressing_paw.png'

const HMR_Pupcrobatics = () => {
  return (
    <>
    <section className="pt-[60px] lg:pt-[120px] relative min-h-[650px] lg:min-h-[2400px]  bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Paper})` }}>
        <div className='container max-w-7xl mx-auto'>
            <div className='flex flex-col items-center space-y-10'>
                <div>
                    <img width={960} src={HYHsite_PUPC_text} alt="HYHsite_PUPC_text" />
                </div>

                <div className='space-y-10 w-full'>
                    <div className='w-full mt-10'>
                        <div className='flex justify-between items-center '>
                            <div className='transform -rotate-6 max-w-xl max-h-xl'>
                                <img width={500} className='border-[16px] border-white max-h-max' src={HYHsite_dogsheepchase_dog} alt="HYHsite_dogsheepchase_dog" />
                            </div>
                            <div className='transform rotate-6 max-w-xl max-h-xl'>
                                <img width={500} className='border-[16px] border-white max-h-max' src={HYHsite_dogsheepchase_sheep} alt="HYHsite_dogsheepchase_sheep" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-10'>
                        <div className='flex justify-between items-center'>
                            <div className='transform rotate-6 max-w-xl max-h-xl'>
                                <img width={500} className='border-[16px] border-white max-h-max' src={HYHsite_dogsheepchase_dog} alt="HYHsite_dogsheepchase_dog" />
                            </div>
                            <div className='transform max-w-xl max-h-xl'>
                                <img width={500} className='border-[16px] border-white max-h-max' src={HYHsite_dogsheepchase_sheep} alt="HYHsite_dogsheepchase_sheep" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-10'>
                        <div className='flex justify-between '>
                            <div className='transform  max-w-xl  -rotate-6'>
                                <img width={500} className='border-[16px] border-white max-h-max' src={HYHsite_dogsheepchase_dog} alt="HYHsite_dogsheepchase_dog " />
                            </div>
                            <div className='transform  max-w-xl  -rotate-6 '>
                                <img width={150} className='bg-fixed max-h-max' src={HYHsite_setdressing_paw} alt="HYHsite_setdressing_paw " />
                            </div>
                            <div className='flex flex-col gap-y-24'>
                                <div className='transform max-w-xl max-h-xl rotate-12'>
                                    <img  width={500}className='border-[16px] border-white max-h-max' src={HYHsite_dogsheepchase_sheep} alt="HYHsite_dogsheepchase_sheep" />
                                </div>
                                <div className='transform max-w-xl max-h-xl rotate-5 -translate-y-20'>
                                    <img width={500} className='border-[16px] border-white max-h-max' src={HYHsite_dogsheepchase_sheep} alt="HYHsite_dogsheepchase_sheep" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HMR_Pupcrobatics