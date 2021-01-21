import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TextDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const LetsTalk = styled.p`
    font-family: Schnyder S Light;
    font-size: 100px;
`;

export const LinkTextDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-family: Schnyder M Light Italic;
    font-size: 70px;
`;

export const SocialLinks = styled(Link)`
    text-decoration: none;
    color: #0070A3;
`;