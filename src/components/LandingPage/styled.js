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
    height: 100vh;
    width: 100%;

    @media screen and (max-width: 480px) {
        height: 80vh;
    }
`;

export const KimzPicDiv = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    height: 375px;
    width: 375px;
    margin-top: -80px;
    overflow: hidden;
    
    @media screen and (max-width: 768px) {
        margin-top: -100px;
    }

    @media only screen and (min-width: 1400px) {
        margin-top: -30px;
    }    
`;

export const KimzImg = styled.img`
    display: block;
    width: auto;
`;

export const KimberlyText = styled.p`
    font-family: Schnyder M Demi;
    font-size: 90px;
    line-height: 112px;
    color: black;
    
    @media only screen and (max-width: 480px) {
        position: absolute;
        top: -30px;
        left: 25px;
    }

    @media only screen and (max-width: 768px) {
        position: absolute;
        top: -70px;
        left: 80px;
    }

    @media screen and (min-width: 768px) {
        position: absolute;
        top: -20px;
        left: 378px;
    }
`;

export const ChucText = styled.p`
    position: absolute;
    font-family: Schnyder M Demi;
    font-size: 90px;
    line-height: 112px;
    color: black;

    @media screen and (max-width: 480px) {
        position: absolute;
        top: 388px;
        left: 85px;
    }

    @media screen and (max-width: 768px) {
        position: absolute;
        top: 380px;
        left: 150px;
    }

    @media screen and (min-width: 768px) {
        top: 370px;
        left: 870px;
    }
`;

export const FunctionsText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
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

    @media screen and (max-width: 768px) {
        font-size: 60px;
        width: 200px;
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

    @media screen and (max-width: 768px) {
        font-size: 50px;
        width: 170px;
    }
`;

export const FnBText = styled.p`
    position: absolute;
    font-family: RomanaEF-Book;
    color: #DAD5C9;

    @media screen and (max-width: 480px) {
        font-size: 18px;
        top: 1025px;
        left: 35px;
    }

    @media screen and (max-width: 768px) {
        font-size: 25px;
        top: 973px;
        left: 28px;
    }

    @media screen and (min-width: 768px) {
        font-size: 50px;
        top: 950px;
        left: 267px;
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

    @media screen and (max-width: 480px) {
        font-size: 40px;
        width: 75px;
    }

    @media screen and (max-width: 768px) {
        font-size: 55px;
        width: 120px;
    }

    @media screen and (min-width: 768px) {
        font-size: 85px;
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

    @media screen and (max-width: 768px) {
        font-size: 60px;
        width: 180px;
    }
`;