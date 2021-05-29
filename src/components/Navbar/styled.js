import styled, { css } from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

const alignCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'transparent' : 'transparent')};
    height: 130px;
    ${alignCenter};
    font-size: 12px;
    position: sticky;
    top: 10px;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    height: 100%;
    z-index: 1;
    width: 100vw;
    padding: 0 2rem; 
`;

export const NavLogo = styled(LinkR)`
    ${alignCenter}
    cursor: pointer;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        width: 100%; 
    }
`;

export const NavLogoImg = styled.img`
    height: 80px;
    width: 100px;
    max-width: 92px;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #black;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItems = styled.li`
    font-family: GTWalsheimPro-Light;
    font-size: ${props => props.fontSize || "28px"};
    margin: ${props => props.margin || "0px"}; 
`

export const NavLinks = styled(LinkS)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-in-out;
        color: #0070A3;
    }

    &.active {
        color: #0070A3;
    }
`;