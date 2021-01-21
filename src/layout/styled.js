import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
    border-top: 20px solid white;
    background-color: white;
`;

export const NavBarList = styled.ul`
    padding: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    font-family: Copernicus-Medium;
    font-size: 24px;
`;

export const LogoImg = styled.img`
    height: 90px;
    width: 108px;
`;

export const LinkStyle = styled.a`
    text-decoration: none;
    color: black;
`;

export const NavLinkStyle = styled(NavLink)`
    text-decoration: none;
    color: black;
`;

export const NavSubText = styled.div`
    font-size: 14px;
    margin-top: 10px;
`;