import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import kim_logo from './final_logo.png';
import {
    NavBar,
    NavBarList,
    LogoImg,
    NavLinkStyle,
    LinkStyle,
    NavSubText
} from './styled';

const Nav = () => {
    return(
        <NavBar>
            <NavBarList>
                <li><LinkStyle href='#'><LogoImg src={kim_logo} /></LinkStyle></li>
                <div><li><NavLinkStyle to='/works'>works<br/><NavSubText>some projects</NavSubText></NavLinkStyle></li></div>
                <div><li><NavLinkStyle to='/quaran-tings'>quaran-tings<br/><NavSubText>to pass the time</NavSubText></NavLinkStyle></li></div>
                <div><li><NavLinkStyle to='/kim'>kim<br/><NavSubText>about me</NavSubText></NavLinkStyle></li></div>
                <div><li><NavLinkStyle to='contactme'>contact me<br/><NavSubText>I'm interesting</NavSubText></NavLinkStyle></li></div>
            </NavBarList>
        </NavBar>
    )
}

export default Nav;