import React from 'react'
import HYHsite_MTP_text from '../../assets/HYHsite/HYHsite_MTP_text.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';


const HMR_MeetThePup = () => {

  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };



  return (
    <>
    <section className='py-[120px]'>
        <div className='container max-w-7xl mx-auto'>
            <div className='flex flex-col gap-y-6'>
                <div className='w-full'>
                    <img className='mx-auto' width={960} src={HYHsite_MTP_text} alt="HYHsite_MTP_text" />
                </div>
            </div>
            

            <div className='my-14'>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={3} coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper px-14 lg:px-0"
                breakpoints={breakpoints}
            >
                  <SwiperSlide>
                    <div className='bg-slate-300 h-[500px] rounded-2xl'>
                      <img
                        src='https://dummyimage.com/350x500/#c7c6c/000'
                        alt='Description of your image'
                        className='w-full h-full object-cover rounded-2xl'
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='bg-slate-300 h-[500px] rounded-2xl'>
                        <img
                          src='https://dummyimage.com/350x500/#c7c6c/000'
                          alt='Description of your image'
                          className='w-full h-full object-cover rounded-2xl'
                        />
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className='bg-slate-300 h-[500px] rounded-2xl'>
                          <img
                            src='https://dummyimage.com/350x500/#c7c6c/000'
                            alt='Description of your image'
                            className='w-full h-full object-cover rounded-2xl'
                          />
                        </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='bg-slate-300 h-[500px] rounded-2xl'>
                        <img
                          src='https://dummyimage.com/350x500/#c7c6c/000'
                          alt='Description of your image'
                          className='w-full h-full object-cover rounded-2xl'
                        />
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='bg-slate-300 h-[500px] rounded-2xl'>
                      <img
                        src='https://dummyimage.com/350x500/#c7c6c/000'
                        alt='Description of your image'
                        className='w-full h-full object-cover rounded-2xl'
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='bg-slate-300 h-[500px] rounded-2xl'>
                      <img
                        src='https://dummyimage.com/350x500/#c7c6c/000'
                        alt='Description of your image'
                        className='w-full h-full object-cover rounded-2xl'
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='bg-slate-300 h-[500px] rounded-2xl'>
                      <img
                        src='https://dummyimage.com/350x500/#c7c6c/000'
                        alt='Description of your image'
                        className='w-full h-full object-cover rounded-2xl'
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='bg-slate-300 h-[500px] rounded-2xl'>
                      <img
                        src='https://dummyimage.com/350x500/#c7c6c/000'
                        alt='Description of your image'
                        className='w-full h-full object-cover rounded-2xl'
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='bg-slate-300 h-[500px] rounded-2xl'>
                      <img
                        src='https://dummyimage.com/350x500/#c7c6c/000'
                        alt='Description of your image'
                        className='w-full h-full object-cover rounded-2xl'
                      />
                    </div>
                  </SwiperSlide>
              </Swiper>
            </div>
        </div>
    </section>
    </>
  )
}

export default HMR_MeetThePup