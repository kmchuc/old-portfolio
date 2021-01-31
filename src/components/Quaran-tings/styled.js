import styled from 'styled-components';

export const QuarantingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`;

export const QuarantingsTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    font-family: Schnyder M Demi Italic;
    font-size: 100px;

    @media screen and (max-width: 480px) {
        font-size: 90px;
        width: 90%;
    }

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;

export const QuarantingsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
`;

export const ActivityTitle = styled.h1`
    display: flex;
    justify-content: center;
    font-family: Schnyder M Demi;
    font-size: 40px;

    @media screen and (max-width: 480px){
        text-align: center;
    }
`;

export const ActivityList = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Schnyder M Light Italic;
    font-size: 30px;
    width: 100%;
    margin-bottom: 100px;

    @media screen and (max-width: 480px){
        text-align: center;
    }
`;

export const PodcastTitle = styled.h3`
    margin: 0px;
`;

export const SeparateDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 480px) {
        flex-direction: column;  
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const LinkStyle = styled.a`
    color: black;
`;