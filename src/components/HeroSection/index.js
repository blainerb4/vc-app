import React, {useState} from 'react'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroButtonWrapper, 
    ArrowForward,
    ArrowRight
} from './hero-elements'
import Video from '../../video/video.mp4'
import {Button} from '../button-element'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
        <HeroBg>
           <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Your Bitcoin Payment Solution</HeroH1>
            <HeroP>
                Signup for a new account today and receive $5 USD worth 
                of bitcoin when you make your first transaction.
            </HeroP>
            <HeroButtonWrapper>
                <Button to='sign-up' 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroButtonWrapper>
        </HeroContent>
        </HeroContainer>
    )
}
//may remove id home
export default HeroSection
