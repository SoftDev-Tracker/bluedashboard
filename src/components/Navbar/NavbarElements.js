import styled from "styled-components";
import {css} from "../../assets/css/variables"



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

    a{
        margin-right: 1rem;
        font-weight: 600;
        font-size: 14px;
    }
`

export const NavLogo = styled.div`
    img{
        width: 170px;
    }

    a{
        margin: auto;
    }

    @media only screen and (min-width: 768px){
        margin-left: 1rem;        
    }
`
export const NavMenuBtn = styled.div`

`

export const BurgerBtn = styled.button`
    background-color: #ffffff;
    border: none;
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