import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import logo from './final_logo.png';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavLogoImg,
    MobileIcon,
    NavMenu,
    NavItems,
    NavSubItems,
    NavLinks
} from './styled';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav scrollNav={scrollNav} >
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}><NavLogoImg src={logo} alt='logo' /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                        <NavMenu>
                                <NavItems>
                                    <NavLinks to='works' smooth={true} duration={900} spy={true} exact='true'
                                    >works<NavItems fontSize={"15px"} margin={"8px 0 0 0"}>some projects</NavItems></NavLinks>
                                </NavItems>
                                <NavItems>
                                    <NavLinks to='quaran-tings' smooth={true} duration={900} spy={true} exact='true'>quanran-tings<NavItems fontSize={"15px"} margin={"8px 0 0 0"}>to pass the time</NavItems></NavLinks>
                                </NavItems>
                                <NavItems>
                                    <NavLinks to='kim.' smooth={true} duration={900} spy={true} exact='true'>kim.<NavItems fontSize={"15px"} margin={"8px 0 0 0"}>about me</NavItems></NavLinks>
                                </NavItems>
                                <NavItems>
                                    <NavLinks to='contactme' smooth={true} duration={900} spy={true} exact='true'>contact me<NavItems fontSize={"15px"} margin={"8px 0 0 0"}>I'm interesting</NavItems></NavLinks>
                                </NavItems>
                        </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
