import React from 'react'
import { 
    SideBarContainer, 
    Icon, 
    CloseIcon, 
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    SideButtonWrap,
    SideBarRoute
} from './sidebar-elements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='about' onClick={toggle}>
                        About
                    </SideBarLink>
                    <SideBarLink to='discover' onClick={toggle}>
                        Discover
                    </SideBarLink>
                    <SideBarLink to='services' onClick={toggle}>
                        Services
                    </SideBarLink>
                    <SideBarLink to='sign-up' onClick={toggle}>
                        Sign Up
                    </SideBarLink>
                </SideBarMenu>
                <SideButtonWrap>
                    <SideBarRoute to='/sign-in'>Sign In</SideBarRoute>
                </SideButtonWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
//rafce