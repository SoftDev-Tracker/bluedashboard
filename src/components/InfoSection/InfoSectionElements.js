import styled from "styled-components";
import {css} from "../../core-ui/css/variables"


export const HeaderContainer = styled.div` 
    display: flex;
    margin-bottom: 1.5rem;

    a{
        color: ${css.colorLink};
    }

    svg{
        display: block;
        color: #dfb601;
        font-size: 3rem;
        margin-right: 0.5rem;
    }


    @media only screen and (min-width: 768px){
        margin-top: 1rem;
        margin-bottom: 1.rem;
    }
`

export const TextSection = styled.div`

`

export const Greeting = styled.div`
    color: ${css.colorLigth};
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
`

export const TitleOrganitation = styled.div`
    color: ${css.colorSecundary};
    font-size: 1.3rem;
    font-weight: 800;
    margin-top: 2px;
    margin-bottom: 4px;

    @media only screen and (min-width: 768px){
        font-size: 1.5rem;
    }
`

export const Description = styled.div`
    color: ${css.colorLigth};
    font-size: 14px;
`