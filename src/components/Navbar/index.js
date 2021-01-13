import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu, 
    NavItem,
    NavLinks,
    NavButton,
    NavButtonLink
} 
from './navbar-elements'

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Poplar
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='sign-up'>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavButton>
                    <NavButtonLink to='/sign-in'>Sign In</NavButtonLink>
                </NavButton>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
//rafce
