import styled from "styled-components";
import {css} from "../../core-ui/css/variables"


export const HeaderContainer = styled.div` 
    display: flex;

    a{
        color: ${css.colorLink};
    }

    svg{
        display: block;
        color: #dfb601;
        font-size: 3rem;
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
    font-size: 1.6rem;
    font-weight: 800;
`

export const Description = styled.div`
    color: ${css.colorLigth};
`