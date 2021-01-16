import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import SideBar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <SideBar isOpen={isOpen} toggle={toggle}/>  
          <Navbar toggle={toggle}/>
          <HeroSection />
          <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjTwo} />
          <Services />
          <InfoSection {...homeObjThree} />
          <Footer />
        </>
    )
}

export default Home
//rafce