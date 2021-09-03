import React from 'react'
import { Nav, NavLogo, NavMenuBtn, BurgerBtn, MenuList, NavLoginSection } from './NavbarElements'
import logo from '../../assets/img/logov1.png'
import { HiMenu } from 'react-icons/hi';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenuBtn>
                    <BurgerBtn>
                        <HiMenu/>
                    </BurgerBtn>
                </NavMenuBtn>

                <NavLogo>
                    <img src={logo} alt="Logo"/>
                </NavLogo>

                <div className="space"></div>

                <MenuList>
                    <li>Projects</li>
                    <li>Feed</li>
                </MenuList>

                <NavLoginSection>
                    <a href="/">Log-in</a>
                    <a href="/">Es</a>
                </NavLoginSection>

            </Nav>
        </>
    )
}

export default Navbar
