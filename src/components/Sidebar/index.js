import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './styled'

export const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='works' onClick={toggle}>works</SidebarLink>
                    <SidebarLink to='quarantings' onClick={toggle}>quaran-tings</SidebarLink>
                    <SidebarLink to='kim.' onClick={toggle}>kim.</SidebarLink>
                    <SidebarLink to='contactme' onClick={toggle}>contact me</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;