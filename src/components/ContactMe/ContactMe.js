import React from 'react';
import {
    ContactMeContainer,
    TextDiv,
    LetsTalk,
    LinkTextDiv,
    SocialLinks
} from './styled';

const ContactMe = () => {
    return(
        <ContactMeContainer id='contactme'>
            <TextDiv>
                <LetsTalk>Let's talk! Reach me at -</LetsTalk>
            </TextDiv>
            <LinkTextDiv>
                <SocialLinks href='mailto:kimmchuc@gmail.com'>email.</SocialLinks>
                <SocialLinks href='https://www.linkedin.com/in/kimberlymchuc/' target='_blank'>linkedin.</SocialLinks>
                <SocialLinks href='https://github.com/kmchuc' target='_blank'>github.</SocialLinks>
            </LinkTextDiv>
        </ContactMeContainer>
    )
}

export default ContactMe;