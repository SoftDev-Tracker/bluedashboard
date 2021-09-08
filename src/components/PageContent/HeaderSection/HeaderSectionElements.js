import styled from "styled-components";
import {Link} from 'react-router-dom'


export const HeaderContainer = styled.div`
    width: 100%;
`

export const TitleSection = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;


    svg{
        color: #666666;
        margin-right: 0.7rem;
    }

    svg, h1, h2{
        font-size: 1.2rem;
    }

    h1,h2{
        color: #142c5b;
        margin: 0;
    }

    @media only screen and (min-width: 768px){
        h1,h2, svg{
            font-size: 1.3rem;
        }
    }

`

export const Title = styled.h1`
    user-select: none;
`


export const ProjectName = styled.h2`
    font-weight: 400;

    &:before{
        content: "–";
        margin: 0 10px;
    }
`


export const Breadcrum = styled.div`
    color: #3f3f3f;
    font-weight: normal;
    font-size: 14px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;

`

export const LinkBreadcrum = styled(Link)`
    color: #142c5b;
    font-weight: bold;
    &:after{
        content: "/";
        margin: 0 0.4rem;
    }
`
