import styled from 'styled-components';

export const ContactMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;

    @media screen and (max-width: 480px){
        height: 97vh;
    }
`;

export const TextDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LetsTalk = styled.p`
    font-family: Schnyder S Light;
    font-size: 100px;

    @media screen and (max-width: 480px){
        font-size: 80px;
        text-align: center;
        margin-bottom: 0px;
    }

    @media screen and (max-width: 768px) {
        font-size: 70px;
        text-align: center;
    }
`;

export const LinkTextDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-family: Schnyder M Light Italic;
    font-size: 70px;

    @media screen and (max-width: 480px){
        display: flex;
        height: 50%;
        text-align: center;
        justify-content: center;
        justify-content: space-evenly;
        flex-direction: column;
        font-size: 50px;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        justify-content: space-evenly;
    }
`;

export const SocialLinks = styled.a`
    text-decoration: none;
    color: #0070A3;
`;