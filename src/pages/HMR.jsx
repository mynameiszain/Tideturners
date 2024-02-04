import { HMRmenuItems } from "../api/api"
import HMR_AboutSection from "../components/HMR/HMR_AboutSection"
import HMR_Header from "../components/HMR/HMR_Header"
import HMR_MeetThePup from "../components/HMR/HMR_MeetThePup"
import HMR_Pupcrobatics from "../components/HMR/HMR_Pupcrobatics"
import HMR_Trailer from "../components/HMR/HMR_Trailer"
import JoinTheHerd from "../components/HMR/JoinTheHerd"
import Navbar from "../components/Navbar"



const HMR = () => {
  return (
    <>
      <Navbar items={HMRmenuItems} />
      <section className="dirt">
        <HMR_Trailer />
        <HMR_AboutSection />
      </section>

      <section className="dirt">
        <HMR_Pupcrobatics />
        <HMR_MeetThePup />
        <JoinTheHerd />
      </section>
    </>
  )
}

export default HMR