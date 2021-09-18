import styled from "styled-components";
import {NavLink} from 'react-router-dom'


export const SidebarContainer = styled.div`
    background-color: #fff;
    border-right: 1px solid #CECECE;
    height: 100%;
    left: -250px;
    position: fixed;
    top: 0;
    width: 250px;
    @media only screen and (min-width: 768px){
        left: 0px;
    }

`
export const SidebarList = styled.div`

`

export const TitleSeparator = styled.div`
    color: #A0A0A0;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.6rem 1rem;
    user-select: none; 
`


export const LinkGroup = styled.div`
`

export const LinkElement = styled(NavLink)`
    align-items: center;
    display: flex;
    font-size: 14px;
    padding: 0.7rem 1rem;
    
    &.active{
        border-left: 5px solid #1e75f6;
        background-color: #eeeeee;
    }

    svg{
        font-size: 18px;
        color: #666666;
    }

    &:hover{
        background-color: #eeeeee;
    }
`

export const TitleURL = styled.span`
    color: #3f3f3f;
    font-weight: 700;
    padding-left: 1rem;
`