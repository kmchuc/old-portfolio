import React from 'react';
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
    NavLinks
} from './styled';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'><NavLogoImg src={logo} alt='logo'/></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks to='works'>works</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='quarantings'>quanran-tings</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='kim'>kim.</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='contactme'>contact me</NavLinks>
                        </NavItems>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
