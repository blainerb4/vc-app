import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SideBar from '../components/Sidebar'
//import ScrollToTop from '../components/scroll-to-top'
import SignUp from '../components/SignUp'

const SignUpPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/> 
            <Navbar toggle={toggle}/>
            <SignUp />
            <Footer />
        </>
    )
}
        //    <SignIn />
export default SignUpPage