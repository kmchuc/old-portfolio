import styled from 'styled-components';

export const WorksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`;

export const WorksTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Schnyder M Demi;
    font-size: 100px;
    height: 100vh;
    width: 100%;
    background-color: #dad5c9;
`;

export const WorksDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    height: 100vh;
    width: 100%;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const WorksImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 50%;
    background-color: #dad5c9;

    @media screen and (max-width: 480px) {
        height: 50vh;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        height: 50vh;
        width: 100%;
    }
`;

export const InformUsImg = styled.img`
    display: flex;
    position: absolute;
    height: 100px;
    width: 300px;
`;

export const WorksTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 80vh;
    width: 40vw;
    
    @media screen and (max-width: 480px) {
        height: 100vh;
        width: 95%;
    }

    @media screen and (max-width: 768px) {
        height: 100vh;
        width: 95%;
    }
`;

export const WorkTitle = styled.a`
    display: flex;
    font-family: RomanaEF-Book;
    font-size: 25px;
    color: black;
`;

export const PositionTitle = styled.p`
    display: flex;
    justify-content: column;
    font-family: RomanaEF-Light;
    font-size: 18px
`;

export const WorkDescrip = styled.p`
    display: flex;
    font-family: Copernicus-Book;
    font-size: 16px;

    @media screen and (max-width: 480px){
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;

export const BestNeighborImg = styled.img`
    display: flex;
    position: absolute;
    height: 300px;
    width: 490px;

    @media screen and (max-width: 480px) {
        height: auto;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        height: auto;
        width: 100%;
    }
`;

export const TracysbdayImg = styled.img`
    display: flex;
    position: absolute;
    height: 350px;
    width: 480px;

    @media screen and (max-width: 480px) {
        height: auto;
        width: 100%;
    }
`;