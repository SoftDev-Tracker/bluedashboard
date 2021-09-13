import styled from "styled-components";
import {css} from '../../core-ui/css/variables'


export const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 8px;
    svg{
        font-size: 1.6rem;
        color: #909794;
        margin-right: 0.5rem;
    }
`

export const Title = styled.h1`
    color: ${css.colorSecundary};
    font-size: 1.4rem;
    margin: 0;
`