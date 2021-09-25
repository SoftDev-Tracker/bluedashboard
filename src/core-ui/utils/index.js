import styled from "styled-components";
import { Link } from "react-router-dom";

export const Separator = styled.div`
    background-color: #dadada;
    height: 2px;;
    margin: 1.2rem 0;
    width: 100%;
`

export const ContainerFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props=>props.alignItems};
`

export const MainButton = styled(Link)`
    color: #fff;
    background-color: #0948b3;
    border-color: #0948b3;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 50%);
    padding: 7px 1rem;

    &::before{
        content: '+';
        margin-right: 10px;
    }

`