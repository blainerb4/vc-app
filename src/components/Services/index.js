import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import { 
    ServicesContainer, 
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './services-elements'

const Services = () => {
    return (
        <>
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Point of Sale</ServicesH2>
                    <ServicesP>Earn bitcoin and receive $5USD worth of bitcoin for your first transaction.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Support</ServicesH2>
                    <ServicesP>We offer support before during and after signup</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Scalable solutions</ServicesH2>
                    <ServicesP>Integrate with various platforms</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer> 
        </>
    )
}

export default Services
