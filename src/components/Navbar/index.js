import React,{useState} from 'react'
import { Nav, NavLogo, NavMenuBtn, BurgerBtn, MenuList, NavLoginSection } from './NavbarElements'
import logo from '../../assets/img/logov1.png'
import { HiMenu } from 'react-icons/hi';
import { BiWorld } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa'

const Navbar = () => {

    const [click, setClick] = useState();

    const menuBtnHandler = ()=>{
        alert('Helloooooooooooo!');
    }


    return (
        <>
            <Nav>
                <NavMenuBtn>
                    <BurgerBtn onClick={menuBtnHandler}>
                        <HiMenu/>
                    </BurgerBtn>
                </NavMenuBtn>

                <NavLogo>
                    <img src={logo} alt="Logo"/>
                </NavLogo>

                <div className="space"></div>

                <MenuList>
                    <a href="/" className="active">Project</a>
                    <a href="/">Feed</a>
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
        </>
    )
}

export default Navbar
