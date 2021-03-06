import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SideBar from '../components/Sidebar'
//import ScrollToTop from '../components/scroll-to-top'
import SignIn from '../components/SignIn'

const SignInPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/> 
            <Navbar toggle={toggle}/>
            <SignIn />
            <Footer />
        </>
    )
}
        //    <SignIn />
export default SignInPage
