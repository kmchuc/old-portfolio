import React from 'react';
import Descript from '../Descript/Descript';
import KimzPic from './kimzpic.jpg';
import {
  EntireLandingPageContainer,
  LandingPageContainer,
  KimzImg,
  NameText,
} from './styled';

const LandingPage = () => {
  return(
    <EntireLandingPageContainer id='home'>
      <LandingPageContainer>
          <NameText top={'35px'} left={'380px'}>Kimberly</NameText>
            <KimzImg src={KimzPic} alt='KimzPic'/>
          <NameText top={'370px'} left={'850px'}>Chuc</NameText>
      </LandingPageContainer>
      <Descript />
    </EntireLandingPageContainer>  )
}

export default LandingPage;