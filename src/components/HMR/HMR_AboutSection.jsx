import HYHsite_aboutsection_maloy from '../../assets/HYHsite/HYHsite_aboutsection_maloy.png'
import HYHsite_IHFHT_text from '../../assets/HYHsite/HYHsite_IHFHT_text.png'


const HMR_AboutSection = () => {
  return (
    <>
    <section className='py-[120px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-y-6 max-w-7xl mx-auto px-4'>
            <div className="flex w-full justify-center content-around">
                <img width={600} src={HYHsite_aboutsection_maloy} alt="Maloy" />
            </div>
            <div className="flex flex-col items-center gap-y-6 w-full content-around bg-black/50 rounded-lg">
                <div className='max-w-xl text-start text-lg leading-relaxed space-y-6 px-4 font-Verdana text-white py-4'>
                    <div>
                        <img src={HYHsite_IHFHT_text} alt="HYHsite_IHFHT_text" />
                    </div>
                    <p>A mysterious event called the Herdpocalypse has alerted multiple governing bodies across the country. Dozens upon dozens of formerly domesticated animals are being sprung from their pens by a mysterious figure. Eye witness reports corroborate a mysterious sheep that also looks like a pirate found near every outbreak. </p>
                    <p>Famed rancher Cowboy Maloy has been asked by his local government to get his herding dogs to contain the Herdpocalypse and finally bring Woolbeard to justice. HERD UP!</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HMR_AboutSection