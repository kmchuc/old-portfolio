import styled from 'styled-components';

export const EntireLandingPageContainer = styled.div`

`;

export const LandingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    height: 90vh;
    width: 100%;

    @media screen and (max-width: 480px) {
        height: 80vh;
    }

    // add before styles
`;

export const KimzPicDiv = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    height: 350px;
    width: 345px;
    overflow: hidden;
`;

export const KimzImg = styled.img`
    display: block;
    width: auto;
`;

export const KimberlyText = styled.p`
    position: absolute;
    top: -25px;
    left: 395px;
    font-family: Schnyder M Demi;
    font-size: 90px;
    line-height: 112px;
    color: black;

    @media screen and (max-width: 768px) {
        position: absolute;
        left: 80px;
    }

    @media screen and (max-width: 480px) {
        position: absolute;
        top: -30px;
        left: 25px;
    }
`;

export const ChucText = styled.p`
    position: absolute;
    top: 340px;
    left: 860px;
    font-family: Schnyder M Demi;
    font-size: 90px;
    line-height: 112px;
    color: black;

    @media screen and (max-width: 768px) {
        position: absolute;
        left: 80px;
    }

    @media screen and (max-width: 480px) {
        position: absolute;
        top: 388px;
        left: 85px;
    }
`;

export const FunctionsText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 90vh;

`;

export const SoftwareEnginerDiv = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    height: 20vh;
    width: 100%;

    @media screen and (max-width: 480px) {
        justify-content: space-evenly;
        height: 20vh;
        width: 90vw;
    }
`;

export const SoftwareEngineerText = styled.p`
    font-family: RomanaEF-Book;
    font-size: 85px;
    color: black;

    @media screen and (max-width: 480px) {
        font-size: 40px;
        width: 140px;
    }
`;

export const Character = styled.p`
    font-family: RomanaEF-Book;
    font-size: 85px;
    color: #DAD5C9;

    @media screen and (max-width: 480px) {
        font-size: 50px;
        width: 20px;
    }
`;

export const Amateur = styled.p`
    font-family: RomanaEF-Light;
    font-size: 75px;

    @media screen and (max-width: 480px) {
        font-size: 35px;
        width: 120px;
    }
`;

export const FnBText = styled.p`
    position: absolute;
    top: 847px;
    left: 267px;
    font-family: RomanaEF-Book;
    font-size: 50px;
    color: #DAD5C9;

    @media screen and (max-width: 480px) {
        font-size: 18px;
        top: 1025px;
        left: 35px;
    }
`;

export const SecondLineTexts = styled.div`
    display: flex;
    justfiy-content: center;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    height: 30vh;
    width: 100%;

    @media screen and (max-width: 480px) {
        height: 10vh;
        width: 100vw;
        justify-content: space-evenly;
    }
`;

export const Avid = styled.p`
    font-family: RomanaEF-Light;
    font-size: 85px;

    @media screen and (max-width: 480px) {
        font-size: 40px;
        width: 75px;
    }
`;

export const AndChar = styled.p`
    align-items: center;
    font-family: RomanaEF-Book;
    font-size: 85px;
    color: #DAD5C9;

    @media screen and (max-width: 480px) {
        font-size: 50px;
    }
`;

export const LifeLong = styled.p`
    font-family: RomanaEF-Book;
    font-size: 85px;

    @media screen and (max-width: 480px) {
        font-size: 40px;
        width: 130px;
    }
`;