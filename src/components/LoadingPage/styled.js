import styled, { keyframes } from 'styled-components';

export const LoadingpageContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export const LoadingOuterBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40vh;
    width: 40vw;
`;

export const LoadingInnerBox = styled.div`
    display: flex;
    align-items: center;
    height: 40vh;
    width: 40vw;
    border-radius: 25px;
    overflow: hidden;
`;

export const KimPic1 = styled.img`
    width: 100%;
    height: auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 25px;
`;

export const WelcomeToKimsPortfolioDiv = styled.div`
    display: flex;
    margin-left: 10px;
    align-self: flex-end;
`;

export const WelcomeToKimsPortfolioText = styled.div`
    font-family: YoungSerif-Regular;
    font-size: 50px;
    text-align: left;
`;

export const LoadingBarDiv = styled.div`
    display: flex;
    align-items: center;
    height: 10vh;
    width: 70vw;
    position: relative;
`;

const progressBar = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`;

export const LoadingBar = styled.span`
    height: 10px;
    background-color: black;
    animation: ${progressBar} 5s ease-in-out;
    animation-fill-mode: both;
`;