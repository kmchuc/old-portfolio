import styled from 'styled-components';

export const KimContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`;

export const KimTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    font-family: Schnyder M Demi;
    font-size: 100px;
    background-color: #dad5c9;
`;

export const ImgandTextDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    width: 100%;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const KimzImgDiv = styled.div`
    display: flex;
    align-items: flex-start;
    height: 60vh;
    width: 40vw;
    overflow: hidden;

    @media screen and (max-width: 480px) {
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

export const KimzImg = styled.img`
    object-fit: cover;
    width: 40vw;
    height: 60vh;

    @media screen and (max-width: 480px) {
        height: 95%;
        width: 90%;
    }

    @media screen and (max-width: 768px) {
        height: 95%;
        width: 90%;
    }
`;

export const AboutMeDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 60vh;
    width: 50%;

    @media screen and (max-width: 480px) {
        width: 90%;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export const AboutMeText = styled.p`
    text-align: left;
    align-content: center;
    
    font-family: RomanaEF-Book;
    font-size: 25px;

    @media screen and (max-width: 480px){
        font-size: 22px;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        font-size: 20px;
        text-align: center;
    }
`;