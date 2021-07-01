import styled, { css } from 'styled-components';

const standard = css`
    display: flex;
    justify-content: center;
    align-content: center;
`;

export const FunctionsText = styled.div`
    ${standard}
    flex-direction: column;
    align-items: center;
    height: 100vh;

    @media screen and (device-width: 375px) {
        width: 100vw;
    }
`;

export const SoftwareEnginerDiv = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    height: 20vh;
    width: 100%;

    @media screen and (device-width: 375px) {
        padding-bottom: 50px;
    }

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

    @media screen and (device-width: 375px){
        font-size: 40px;
        width: 130px;
    }

    @media screen and (device-width: 414px){
        font-size: 50px;
        width: 170px;
    }
    
    @media screen and (width: 500px){
        font-size: 60px;
        width: 200px;
    }

    @media screen and (width: 2560px){
        font-size: 130px;
    }
`;

export const Character = styled.p`
    font-family: RomanaEF-Book;
    font-size: 85px;
    color: #DAD5C9;

    @media screen and (device-width: 375px){
        font-size: 50px;
    }

    @media screen and (device-width: 414px){
        font-size: 60px;
        width: 20px;
    }

    @media screen and (width: 2560px) and (height: 944px){
        font-size: 110px;
    }
`;

export const Amateur = styled.p`
    font-family: RomanaEF-Light;
    font-size: 75px;

    @media screen and (device-width: 375px){
        font-size: 35px;
        width: 110px;
    }

    @media screen and (device-width: 414px){
        font-size: 40px;
        width: 120px;
    }

    @media screen and (width: 500px){
        font-size: 55px;
        width: 170px;
    }

    @media screen and (width: 2560px){
        font-size: 130px;
    }
`;

export const FnBText = styled.p`
    position: absolute;
    font-family: RomanaEF-Book;
    font-size: 50px;
    color: #DAD5C9;
    top: 820px;
    left: 310px;

    @media screen and (device-width: 375px){
        font-size: 20px;
        top: 770px;
        left: 20px;
    }

    @media screen and (device-width: 414px){
        font-size: 25px;
        top: 1005px;
        left: 28px;
    }

    @media screen and (width: 500px){
        font-size: 30px;
        top: 960px;
        left: 15px;
    }

    @media screen and (width: 1280px){
        font-size: 70px;
        top: 1040px;
        left: 50px;
    }

    @media screen and (width: 1280px){
        top: 1270px;
        left: 227px;
    }

    @media screen and (width: 2560px){
        font-size: 80px;
        top: 1200px;
        left: 443px;
    }
`;

export const SecondLineTexts = styled.div`
    ${standard}
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 30vh;
    width: 100%;

    @media screen and (device-width: 375px){
        height: 10vh;
    }

    @media screen and (device-width: 414px){
        height: 20vh;
        width: 100vw;
        justify-content: space-evenly;
    }
`;

export const Avid = styled.p`
    font-family: RomanaEF-Light;
    font-size: 80px;

    @media screen and (device-width: 375px){
        font-size: 35px;
    }

    @media screen and (device-width: 414px){
        font-size: 45px;
        width: 95px;
    }

    @media screen and (width: 500px){
        font-size: 60px;
        width: 150px;
    }

    @media screen and (width: 2560px){
        font-size: 130px;
    }
`;

export const AndChar = styled.p`
    align-items: center;
    font-family: RomanaEF-Book;
    font-size: 85px;
    color: #DAD5C9;

    @media screen and (device-width: 375px){
        font-size: 50px;
    }

    @media screen and (device-width: 414px){
        font-size: 60px;
    }

    @media screen and (width: 2560px){
        font-size: 110px;
    }
`;

export const LifeLong = styled.p`
    font-family: RomanaEF-Book;
    font-size: 85px;

    @media screen and (device-width: 375px){
        font-size: 40px;
        width: 125px;
    }

    @media screen and (device-width: 414px){
        font-size: 50px;
        width: 150px;
    }

    @media screen and (width: 500px){
        font-size: 60px;
        width: 180px;
    }

    @media screen and (width: 2560px) and (height: 944px){
        font-size: 130px;
    }
`;