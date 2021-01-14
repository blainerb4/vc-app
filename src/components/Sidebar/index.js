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

const SideBar = () => {
    return (
        <SideBarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='about'>
                        About
                    </SideBarLink>
                    <SideBarLink to='discover'>
                        Discover
                    </SideBarLink>
                    <SideBarLink to='services'>
                        Services
                    </SideBarLink>
                    <SideBarLink to='sign-up'>
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