import styled from 'styled-components';

export const EntireLandingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 98vw;
    height: 100%;
`;

export const LandingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    height: 83vh;
    width: 95vw;
    margin: 0;
`;

export const KimzImg = styled.img`
    height: 325px;
    width: 325px;
    object-fit: cover;
`;

export const NameText = styled.p`
    position: absolute;
    font-family: Schnyder M Demi;
    font-size: 90px;
    line-height: 100px;
    -webkit-text-stroke-width: 0.8px;
    -webkit-text-stroke-color: black;
    -webkit-text-fill-color: white;
    top: ${props => props.top};
    left: ${props => props.left};

    @media screen and (max-width: 1200px){
        position: static;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center; 
        margin: 0; 
    }

`;