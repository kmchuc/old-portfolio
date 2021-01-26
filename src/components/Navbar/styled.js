import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'transparent' : 'transparent')};
    display: flex;
    height: 130px;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 1rem;
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
    width: 100%;
    max-width: 1350px;
`;

export const NavLogo = styled(LinkR)`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        display: block;
        margin: auto;
    }
`;

export const NavLogoImg = styled.img`
    height: 80px;
    width: 100px;
    max-width: 92px;
    text-align: center;
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
    text-align: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItems = styled.li`
    font-family: GTWalsheimPro-Light;
    font-size: 28px;
`;

export const NavSubItems = styled.p`
    margin-top: 8px;
    margin-bottom: 0px;
    font-family: GTWalsheimPro-Light;
    font-size: 15px;
`;

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