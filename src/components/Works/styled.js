import styled, { css } from 'styled-components';

const general = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WorksContainer = styled.div`
    ${general}
    flex-direction: column;
    position: relative;
    z-index: 1;
`;

export const WorksTitle = styled.div`
    ${general};
    font-family: Schnyder M Demi;
    font-size: 100px;
    height: 83vh;
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

    @media screen and (max-width: 768px) {
        flex-direction: ${props => props.direction || "column-reverse"};
        margin-bottom: 30px;
    }
`;

export const WorksImg = styled.div`
    ${general};
    height: 100vh;
    width: 50%;
    background-color: #dad5c9;
    
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

    @media screen and (max-width: 768px) {
        height: auto;
        width: 70%;
    }
`;

export const WorksTextDiv = styled.div`
    ${general};
    flex-direction: column;
    margin: auto;
    height: 80vh;
    width: 40vw;

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
    padding: 10px;
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

    @media screen and (max-width: 768px) {
        text-align: center;
        padding: 0 20px;
    }
`;

export const BestNeighborImg = styled.img`
    display: flex;
    position: absolute;
    height: 300px;
    width: 490px;

    @media screen and (max-width: 768px) {
        height: auto;
        width: 70%;
    }
`;

export const TracysbdayImg = styled.img`
    display: flex;
    position: absolute;
    height: 350px;
    width: 480px;

    @media screen and (max-width: 480px) {
        height: auto;
        width: 70%;
    }
`;