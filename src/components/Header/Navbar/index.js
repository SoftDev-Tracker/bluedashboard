import React,{useState} from 'react'
import { Nav, NavLogo, NavMenuBtn, 
        BurgerBtn, MenuList, NavLoginSection, 
        HeaderSidebar, ListContainer, 
        ListElementMenu, BottomSection} from './NavbarElements'
import logo from '../../../assets/img/logov1.png'
import { HiMenu } from 'react-icons/hi';
import { BiWorld } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const menuBtnHandler = ()=>{
        setClick(!click);
    }

    return (
        <>
            <Nav>
                <NavMenuBtn>
                    <BurgerBtn onClick={menuBtnHandler}>
                        {
                         click ? <IoMdCloseCircleOutline/> : <HiMenu/>
                        }
                    </BurgerBtn>
                </NavMenuBtn>

                <NavLogo>
                    <Link to="/">
                        <img src={logo} alt="Logo"/>
                    </Link>
                </NavLogo>

                <div className="space"></div>

                <MenuList>
                    <Link to="/" className="active">Project</Link>
                    <Link to="/">Feed</Link>

                </MenuList>

                <NavLoginSection>

                <a href="/">  
                    <BiWorld style={{'font-size':15}}/> 
                    EN 
                </a>
                    <a href="/"> 
                        <FaUserAlt/>
                        Log-in
                    </a>
                </NavLoginSection>
            </Nav>

            <HeaderSidebar display={click}>
                <ListContainer>
                    <ListElementMenu to="/">Project</ListElementMenu>
                    <ListElementMenu>Feed</ListElementMenu>
                    <BottomSection>
                        <ListElementMenu>
                            <FaUserAlt/> Login
                        </ListElementMenu>
                    </BottomSection>
                </ListContainer>
            </HeaderSidebar>

        </>
    )
}

export default Navbar
