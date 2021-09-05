import styled from "styled-components";
import {css} from "../../assets/css/variables"
import {Link} from 'react-router-dom'


export const Nav = styled.nav`
    align-items: center;
    background-color: #ffffff;
    border-bottom: 2px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    left: 0;
    position: fixed;
    padding: 5px;
    top:0;
    right: 0;
    width: 100%;
    z-index: 10;

    a{
        margin-right: 1rem;
        font-size: 15px;
        font-weight: 600;
    }

    @media only screen and (min-width: 768px){
        padding: 10px 0;
    }
`

export const NavLogo = styled.div`
    img{
        margin-left: -20px;
        width: 170px;
    }

    a{
        margin: auto;
    }

    @media only screen and (min-width: 768px){
        margin-left: 1rem;    
        img{
            margin-left: 0;
        }    
    }
`
export const NavMenuBtn = styled.div`
    @media only screen and (min-width: 768px){
        display: none;
    }
`

export const BurgerBtn = styled.button`
    background-color: #ffffff;
    border: none;
    color: #3f3f3f;
    cursor: pointer;
    font-size: 1.6rem;
`

export const MenuList = styled.div`
    display: none;
    margin-left: 1rem;

    a{
        color: ${css.lightLink};
    }
    .active{
        color: ${css.activeLink};
    }
    @media only screen and (min-width: 768px){
        display: flex;
        margin-right: auto;
    }
`

export const NavLoginSection = styled.div`
    display: none;
    margin-right: 1rem;

    svg{
        color:${css.mediumLink};
        font-size: 13px;
        margin-right: 10px;
    }

    a{
        color: ${css.activeLink};
        display: flex;
        align-items: center;
    }

    @media only screen and (min-width: 768px){
        display: flex;
    }

`

export const HeaderSidebar = styled.div`
    animation: 0.5s;
    background-color: #e4e4e5;
    height: 100vh;
    left: ${ props => props.display ? '0px' : '-300px'};
    position: fixed;
    top: 0;
    transition: 350ms;
    width: 300px;
    z-index: 9;

    @media only screen and (min-width: 768px){
        display: none;
    }
`

export const ListContainer = styled.ul`
    margin-top: 2rem;
    padding: 1rem;
`; 

export const ListElementMenu = styled(Link)`
    border-bottom: 1px dotted #8c8c8c;
    color: #142c5b;
    display: block;
    padding: 10px;
`;

export const BottomSection = styled.div`
    padding: 10px;
    position: absolute;
    bottom: 0;
`