import React from 'react';
import kimzpic from './kimzpic.jpg';
import {
    KimContainer,
    KimTitle,
    ImgandTextDiv,
    KimzImgDiv,
    KimzImg,
    AboutMeDiv,
    AboutMeText
} from './styled';

const Kim = () => {
    return(
        <KimContainer id='kim.'>
            <KimTitle>
                kim.
            </KimTitle>
            <ImgandTextDiv>
            <KimzImgDiv>
                <KimzImg src={kimzpic} alt='kimzpic'/>
            </KimzImgDiv>
            <AboutMeDiv>
                <AboutMeText>
                Welcome! My name is Kim and I’m a full stack developer from Hawaii currently based in the San Francisco Bay Area. I have a passion for creating clean and efficient code, products that communicate unique user experiences, and continuing to expand my scope of experience as a developer. After self learning Python for a year, I graduated from Hackbright Academy’s Software Engineering Fellowship and am excited to be searching for my first position within the tech industry. As a lifelong internet culture lover, being able to apply my skills and knowledge to webapps and projects has been a dream.
                </AboutMeText>
            </AboutMeDiv>
            </ImgandTextDiv>
        </KimContainer>
    )
}

export default Kim;