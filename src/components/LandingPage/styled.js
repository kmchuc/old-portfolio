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
`;

export const KimzPicDiv = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    height: 375px;
    width: 375px;
    margin-top: -80px;
    overflow: hidden;

    @media screen and (device-width: 414px) {
        height: 300px;
        width: 300px;
    }
`;

export const KimzImg = styled.img`
    display: block;
    height: auto;
    width: auto;
`;

export const KimberlyText = styled.p`
    position: absolute;
    font-family: Schnyder M Demi;
    font-size: 90px;
    line-height: 112px;
    color: black;
    
    @media only screen and (device-width: 414px) {
        position: absolute;
        top: -5px;
        left: 50px;
    }

`;

export const ChucText = styled.p`
    position: absolute;
    font-family: Schnyder M Demi;
    font-size: 90px;
    line-height: 112px;
    color: black;

    @media screen and (device-width: 414px) {
        position: absolute;
        top: 368px;
        left: 115px;
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

    @media screen and (device-width: 414px) {
        justify-content: space-evenly;
        height: 20vh;
        width: 90vw;
    }
`;

export const SoftwareEngineerText = styled.p`
    font-family: RomanaEF-Book;
    font-size: 85px;
    color: black;

    @media screen and (device-width: 414px) {
        font-size: 45px;
        width: 150px;
    }
`;

export const Character = styled.p`
    font-family: RomanaEF-Book;
    font-size: 85px;
    color: #DAD5C9;

    @media screen and (device-width: 414px) {
        font-size: 50px;
        width: 20px;
    }
`;

export const Amateur = styled.p`
    font-family: RomanaEF-Light;
    font-size: 75px;

    @media screen and (device-width: 414px) {
        font-size: 35px;
        width: 120px;
    }
`;

export const FnBText = styled.p`
    position: absolute;
    font-family: RomanaEF-Book;
    color: #DAD5C9;

    @media screen and (device-width: 414px) {
        font-size: 20px;
        top: 1110px;
        left: 40px;
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

    @media screen and (device-width: 414px) {
        height: 10vh;
        width: 100vw;
        justify-content: space-evenly;
    }
`;

export const Avid = styled.p`
    font-family: RomanaEF-Light;

    @media screen and (device-width: 414px) {
        font-size: 40px;
        width: 85px;
    }
`;

export const AndChar = styled.p`
    align-items: center;
    font-family: RomanaEF-Book;
    font-size: 85px;
    color: #DAD5C9;

    @media screen and (device-width: 414px) {
        font-size: 50px;
    }
`;

export const LifeLong = styled.p`
    font-family: RomanaEF-Book;
    font-size: 85px;

    @media screen and (device-width: 414px) {
        font-size: 40px;
        width: 130px;
    }
`;