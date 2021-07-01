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
          <NameText top={'80px'} left={'400px'}>Kimberly</NameText>
            <KimzImg src={KimzPic} alt='KimzPic'/>
          <NameText top={'420px'} left={'830px'}>Chuc</NameText>
      </LandingPageContainer>
      <Descript />
    </EntireLandingPageContainer>
    )
}

export default LandingPage;