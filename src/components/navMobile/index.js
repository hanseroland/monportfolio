import React,{useState} from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    Navitem,
    Navlinks 
    
} from './MobileElements'


const NavMobile = (props) => {
   

     return (
        <>
            <SidebarContainer isOpen={props.isOpen}  onClick={props.toggle} >
                <Icon onClick={props.toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                    {/*menuData.map((item,index)=>(
                        <SidebarLink key={index} onClick={toggle} to={item.link} > {item.title} </SidebarLink>
                        ))
                    */}
                     <SidebarLink  to="/" > Accueil </SidebarLink>
                     <SidebarLink  to="/savoire-faire" > Savoire-faire</SidebarLink>
                     <SidebarLink  to="/services" > Services</SidebarLink>
                     <SidebarLink  to="/projets" > Projets</SidebarLink>
                     <SidebarLink  to="/apropos" > À propos</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap> 

                   
                        <SidebarRoute to="/contact" onClick={props.toggle} >Contactez-nous</SidebarRoute>
                    
                   
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default NavMobile
