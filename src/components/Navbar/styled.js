import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    display: flex;
    height: 120px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 5px;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    z-index: 1;
    width: 100vw;
    max-width: 1300px;
`;

export const NavLogo = styled(LinkR)`
    display: flex;
    justify-self: flex-start;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 5px;
`;

export const NavLogoImg = styled.img`
    height: 85px;
    width: 98px;
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
    align-items: center;
    justify-content: space-even;
    list-style: none;
    text-align: center;
    padding-inline-start: 10px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItems = styled.li`
    font-family: GTWalsheimPro-Light;
    font-size: 28px;
`;

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    padding: 0 1rem;
    height: 100%
    cursor: pointer;

    &.active {
        color: red;
    }
`;