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
    justify-content: center;
    height: 375px;
    width: 375px;
    margin-top: -80px;
    overflow: hidden;

    @media screen and (device-width: 375px) and (device-height : 667px) {
        height: 300px;
        width: 300px;
    }

    @media screen and (device-width: 375px) and (device-height: 812px) {
        height: 350px;
        width: 350px;
    }

    @media screen and (device-width: 414px){
        margin-top: -214px;
        height: 300px;
        width: 300px;
    }
`;

export const KimzImg = styled.img`
    display: block; 

    @media screen and (device-width: 414px){
        display: block;
        height: 100%;
        width: auto;
    }
`;

export const KimberlyText = styled.p`
    position: absolute;
    font-family: Schnyder M Demi;
    font-size: 90px;
    line-height: 112px;
    top: -40px;
    left: 380px;
    color: black;

    @media screen and (device-width: 375px) and (device-height : 667px) {
        position: absolute;
        top: -40px;
        left: 30px;
    }
    
    @media screen and (device-width: 375px) and (device-height: 812px) {
        position: absolute;
        top: 8px;
        left: 23px;
    }
    
    @media screen and (device-width: 414px){
        position: absolute;
        font-size: 90px;
        top: -91px;
        left: 50px;
    }

    @media screen and (width: 500px) {
        position: absolute;
        top: -60px;
        left: 80px;
    }

    @media screen and (width: 1280px) and (height: 944px){
        position: absolute;
        top: 75px;
        left: 300px;
    }

    @media screen and (width: 2560px) and (height: 944px){
        position: absolute;
        top: 75px;
        left: 930px;
    }
`;

export const ChucText = styled.p`
    position: absolute;
    font-family: Schnyder M Demi;
    font-size: 90px;
    line-height: 112px;
    top: 350px;
    left: 870px;
    color: black;

    @media screen and (device-width: 375px) and (device-height : 667px) {
        position: absolute;
        top: 335px;
        left: 97px;
    }

    @media screen and (device-width: 375px) and (device-height: 812px) {
        position: absolute;
        top: 430px;
        left: 95px;
    }

    @media screen and (device-width: 414px){
        position: absolute;
        top: 255px;
        left: 60px;
    }

    @media screen and (width: 500px) {
        top: 390px;
        left: 154px;
    }

    @media screen and (width: 1280px) and (height: 944px){
        top: 480px;
        left: 790px;
    }

    @media screen and (width: 2560px) and (height: 944px){
        top: 470px;
        left: 1430px;
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

    @media screen and (device-width: 375px) and (device-height : 667px) {
        font-size: 40px;
        width: 135px;
    }

    @media screen and (device-width: 375px) and (device-height: 812px) {
        font-size: 40px;
        width: 130px;
    }

    @media screen and (device-width: 414px) and (device-height : 736px){
        font-size: 50px;
        width: 170px;
    }
    
    @media screen and (width: 500px){
        font-size: 60px;
        width: 200px;
    }

    @media screen and (width: 2560px) and (height: 944px){
        font-size: 130px;
    }
`;

export const Character = styled.p`
    font-family: RomanaEF-Book;
    font-size: 85px;
    color: #DAD5C9;

    @media screen and (device-width: 375px) and (device-height : 667px) {
        font-size: 50px;
    }

    @media screen and (device-width: 375px) and (device-height: 812px){
        font-size: 50px;
    }

    @media screen and (device-width: 414px) and (device-height : 736px){
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

    @media screen and (device-width: 375px) and (device-height : 667px) {
        font-size: 35px;
        width: 120px;
    }

    @media screen and (device-width: 375px) and (device-height: 812px){
        font-size: 35px;
        width: 110px;
    }

    @media screen and (device-width: 414px) and (device-height : 736px){
        font-size: 40px;
        width: 120px;
    }

    @media screen and (width: 500px){
        font-size: 55px;
        width: 170px;
    }

    @media screen and (width: 2560px) and (height: 944px){
        font-size: 130px;
    }
`;

export const FnBText = styled.p`
    position: absolute;
    font-family: RomanaEF-Book;
    font-size: 50px;
    color: #DAD5C9;
    top: 950px;
    left: 265px;

    @media screen and (device-width: 375px) and (device-height : 667px) {
        font-size: 17px;
        top: 950px;
        left: 30px;
    }

    @media screen and (device-width: 375px) and (device-height: 812px){
        font-size: 18px;
        top: 1230px;
        left: 30px;
    }

    @media screen and (device-width: 414px) and (device-height : 736px){
        font-size: 25px;
        top: 1058px;
        left: 28px;
    }

    @media screen and (width: 500px){
        font-size: 30px;
        top: 960px;
        left: 15px;
    }

    @media screen and (width: 1280px) and (height: 944px){
        top: 1270px;
        left: 227px;
    }

    @media screen and (width: 2560px) and (height: 944px){
        font-size: 80px;
        top: 1200px;
        left: 443px;
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

    @media screen and (device-width: 375px) and (device-height: 812px){
        height: 10vh;
    }

    @media screen and (device-width: 414px) and (device-height : 736px){
        height: 20vh;
        width: 100vw;
        justify-content: space-evenly;
    }
`;

export const Avid = styled.p`
    font-family: RomanaEF-Light;
    font-size: 80px;

    @media screen and (device-width: 375px) and (device-height : 667px) {
        font-size: 35px;
    }

    @media screen and (device-width: 375px) and (device-height: 812px){
        font-size: 35px;
    }

    @media screen and (device-width: 414px) and (device-height : 736px){
        font-size: 45px;
        width: 95px;
    }

    @media screen and (width: 500px){
        font-size: 60px;
        width: 150px;
    }

    @media screen and (width: 2560px) and (height: 944px){
        font-size: 130px;
    }
`;

export const AndChar = styled.p`
    align-items: center;
    font-family: RomanaEF-Book;
    font-size: 85px;
    color: #DAD5C9;

    @media screen and (device-width: 375px) and (device-height : 667px) {
        font-size: 50px;
    }

    @media screen and (device-width: 375px) and (device-height: 812px){
        font-size: 50px;
    }

    @media screen and (device-width: 414px) and (device-height : 736px){
        font-size: 60px;
    }

    @media screen and (width: 2560px) and (height: 944px){
        font-size: 110px;
    }
`;

export const LifeLong = styled.p`
    font-family: RomanaEF-Book;
    font-size: 85px;

    @media screen and (device-width: 375px) and (device-height : 667px) {
        font-size: 40px;
        width: 120px;
    }

    @media screen and (device-width: 375px) and (device-height: 812px){
        font-size: 40px;
        width: 125px;
    }

    @media screen and (device-width: 414px) and (device-height : 736px){
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