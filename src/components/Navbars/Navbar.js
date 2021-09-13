import React, {useState, useEffect} from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'


 

const Navbar = ({toggle}) => {


    const [scrollNav, setScrollNav] = useState(false)
   
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }


    useEffect(()=> {
        window.addEventListener('scroll', changeNav)
       
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}  >
                <NavbarContainer>
                        <NavLogo to="/" scrollNav={true} onClick={toggleHome} >
                               HRP
                        </NavLogo>
                        <MobileIcon  onClick={toggle} >
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                        <NavItem>
                                <NavLink
                                    onClick={toggleHome}
                                    to="accueil"
                                    smooth={true}
                                    duration={500} 
                                    spy={true}
                                    exact={true}
                                    offset={-80}
                                    scrollNav={true}

                                >
                                    Accueil
                                </NavLink>
                            </NavItem>
                           <NavItem>
                                <NavLink
                                    to="apropos"
                                    smooth={true}
                                    duration={500} 
                                    spy={true}
                                    exact={true}
                                    offset={-80}
                                    scrollNav={true}

                                >
                                    À propos
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                to="services"
                                scrollNav={true}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}>
                                    Services
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                to="portfolio"
                                scrollNav={true}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}

                                >Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    to="contact"
                                    smooth={true}
                                    duration={500} 
                                    spy={true}
                                    exact={true}
                                    offset={-80}
                                    scrollNav={true}

                                >
                                   Contactez-moi
                                </NavLink>
                            </NavItem>

                        </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
