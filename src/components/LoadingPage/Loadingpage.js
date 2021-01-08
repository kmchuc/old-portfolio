import React from 'react';
import {
    LoadingpageContainer,
    LoadingOuterBox,
    LoadingInnerBox,
    LoadingBarDiv,
    LoadingBar,
    KimPic1,
    WelcomeToKimsPortfolioDiv,
    WelcomeToKimsPortfolioText
} from './styled';
import kimpic1 from './images/pic1.jpg';

const Loadingpage = () => {

    setTimeout(function() {
        window.location.replace('#LandingPage');
    }, 5000)
    return(
        <LoadingpageContainer>
            <LoadingOuterBox>
                <LoadingInnerBox>
                    <KimPic1 src={kimpic1} alt="Kim Pic 1" />
                </LoadingInnerBox>
                <WelcomeToKimsPortfolioDiv>
                    <WelcomeToKimsPortfolioText>
                    Loading Kim's Portfolio...
                    </WelcomeToKimsPortfolioText>
                </WelcomeToKimsPortfolioDiv>
            </LoadingOuterBox>
            <LoadingBarDiv>
                <LoadingBar></LoadingBar>
            </LoadingBarDiv>
        </LoadingpageContainer>
    )
}

export default Loadingpage;