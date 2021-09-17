import styled from "styled-components";
import { css } from "../../core-ui/css/variables";
import { Link } from "react-router-dom";


export const Grid = styled.div`
    display: grid;
    gap: 1rem;
    grid-auto-rows: 11rem;
    grid-template-columns: repeat(auto-fill, minmax( min(100%, 18rem), 1fr));
    padding: 2rem 0;
`


export const Card = styled.div`
    background-color: #ffffff;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.20) 0px 5px 15px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-column: span 1;
    padding: 1rem;

`

export const CardContainer = styled.div`
`

export const TopSection = styled.div`
    justify-content: space-between;
    display: flex;
    margin: 5px 0;
    svg{
        color: #5d5d5d;
        font-size: 20px;
    }
`

export const Title = styled(Link)`
    color: ${css.colorSecundary};
    font-weight: 800;
    font-size: 1.1rem;
    margin: 0px;
`

export const EditButton = styled.div`

`

export const Description = styled.div`
    color: ${css.colorGray};
    min-height: 50px;
`

export const InfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px
`

export const Section = styled.div`
    color: ${css.colorGray};    
    font-size: 14px;
    width: 33.3%;
    text-align: center;

`

export const TitleInfo = styled.div`
    font-weight: 600;
    text-align: center;
`

export const DescriptionInfo = styled.div`
    margin-top: 2px;
`
export const StateLabel = styled.div`
    align-items: center;
    display: flex;
    margin: 0 auto;
    width: fit-content;
    svg{
        margin-right: 5px;
    }
`