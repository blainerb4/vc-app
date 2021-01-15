import React from 'react'
import {Button} from '../button-element'
import { 
    InfoContainer, 
    InfoWrapper,
    InfoRow, 
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ButtonWrap,
    Column2,
    ImgWrap,
    Img
} from './info-elements'



const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt
}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <ButtonWrap>
                            <Button to='home'>{buttonLabel}</Button>
                        </ButtonWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
}

export default InfoSection