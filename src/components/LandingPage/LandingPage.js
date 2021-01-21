import React, { useState } from 'react';
import KimzPic from './kimzpic.jpg';

import {
  LandingPageContainer,
  KimzPicDiv,
  KimzImg,
  KimberlyText,
  ChucText,
  FunctionsText,
  SoftwareEnginerDiv,
  FnBText,
  SoftwareEngineerText,
  Character,
  Amateur,
  SecondLineTexts,
  Avid,
  AndChar,
  LifeLong
} from './styled';

const LandingPage = () => {
  return(
    <>
    <LandingPageContainer>
        <KimzPicDiv>
          <KimzImg src={KimzPic} alt='KimzPic'/>
        </KimzPicDiv>
        <KimberlyText>Kimberly</KimberlyText>
        <ChucText>Chuc</ChucText>
    </LandingPageContainer>
    <FunctionsText>
      <SoftwareEnginerDiv>
        <FnBText>frontend & backend</FnBText>
        <SoftwareEngineerText>Software Engineer</SoftwareEngineerText>
        <Character>/</Character>
        <Amateur>Amateur Web Designer</Amateur>
      </SoftwareEnginerDiv>
      <SecondLineTexts>
        <Avid>Avid Baker</Avid>
        <AndChar>&</AndChar>
        <LifeLong>Lifelong Learner</LifeLong>
      </SecondLineTexts>
    </FunctionsText>
    </>
  )
}

export default LandingPage;