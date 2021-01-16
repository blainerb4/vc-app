import React from 'react'
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaReddit, FaTwitter } from 'react-icons/fa'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './footer-elements'


const Footer = () => {
    return (
        <FooterContainer>
           <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/'>How It Works</FooterLink>
                                <FooterLink to='/'>Terms of Service</FooterLink>
                                <FooterLink to='/'>Privacy Policy</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='/'>Contact</FooterLink>
                                <FooterLink to='/'>Support</FooterLink>
                                <FooterLink to='/'>FAQ</FooterLink>
                                <FooterLink to='/'>Referrals</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Use Cases</FooterLinkTitle>
                                <FooterLink to='/'>Platforms</FooterLink>
                                <FooterLink to='/'>SaaS</FooterLink>
                                <FooterLink to='/'>Marketplaces</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Company</FooterLinkTitle>
                                <FooterLink to='/'>Customers</FooterLink>
                                <FooterLink to='/'>Partners</FooterLink>
                                <FooterLink to='/'>Blog</FooterLink>
                                <FooterLink to='/'>Referral Program</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Poplar
                        </SocialLogo>
                        <WebsiteRights>Poplar © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.facebook.com/poplarpay' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//www.twitter.com/poplarpay' target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Reddit'>
                            <FaReddit />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Discord'>
                            <FaDiscord />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap> 
        </FooterContainer>
    )
}

export default Footer
