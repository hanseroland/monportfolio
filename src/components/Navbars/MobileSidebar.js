import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu, 
    SidebarLink,
} from './MobileSideBarStyle'


const MobileSideBar = ({isOpen,toggle}) => {
    return (
        <> 
            <SidebarContainer isOpen={isOpen}  onClick={toggle} >
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="/" onClick={toggle}>Accueil</SidebarLink>
                        <SidebarLink to="apropos"   onClick={toggle}> À propos</SidebarLink>
                        <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                        <SidebarLink to="portfolio"  onClick={toggle}>Portfolio</SidebarLink>
                        <SidebarLink to="contact"  onClick={toggle}>Contactez-moi</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default MobileSideBar
