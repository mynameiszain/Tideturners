import React, { useEffect } from 'react';
import HYHsite_Main_Background from '../../assets/HYHsite/HYHsite_Main_Background.png'
import HYHsite_Main_Foreground from '../../assets/HYHsite/HYHsite_Main_Foreground-cropped.png'
import HYHsite_Main_Logo from '../../assets/HYHsite/HYHsite_Main_Logo.png'
import Topleafborder from '../../assets/HYHsite/Leaf.png'

const HMR_Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scaleValue = 1 + scrollPosition / 1000;
      const moveFactor = scrollPosition / 10;

      document.getElementById('parallaxImage').style.transform = `scale(${scaleValue})`;
      document.getElementById('parallaxImage2').style.transform = `scale(${scaleValue})`;
      document.getElementById('logo').style.transform = `translate(-50%, -50%) scale(${scaleValue})`;
      // document.getElementById('iconLeft').style.transform = `translateX(${-moveFactor}px)`;
      // document.getElementById('iconRight').style.transform = `translateX(${moveFactor}px)`;
      // document.getElementById('iconLeft').style.opacity = 1 - scrollPosition / 500;
      // document.getElementById('iconRight').style.opacity = 1 - scrollPosition / 500;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <section class="image_section">
        <div class="image_container">
            <img class="image_1" id="parallaxImage" src={HYHsite_Main_Background} alt="Background" />
            <img class="image_4" src={Topleafborder} alt="Background" />
            <img class="image_2" id="parallaxImage2" src={HYHsite_Main_Foreground} alt="Foreground" />
            <img class="image_3"  src={HYHsite_Main_Logo} alt="Logo" />
        </div>
    </section>
    </>
  )
}

export default HMR_Header