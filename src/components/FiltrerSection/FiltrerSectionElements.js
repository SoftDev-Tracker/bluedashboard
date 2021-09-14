import styled from "styled-components"

export const FiltretSectionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
`

export const SearchBox = styled.div`
    border-bottom: 2px solid #a4a4a4;
    display: flex;
    padding: 5px 0;
`

export const CheckSection = styled.div`
    align-items: center;
    display: flex;
`

export const SearchButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    svg{
        color: grey;
        font-size: 1.3rem;
    }
`

export const SearchForm = styled.input`
    background-color: transparent;
    border: none;
    width: 250px;
    :focus{
        outline: none;
    }
`

export const Label = styled.label`
    color: grey;
    display: block;
`

export const CheckBox = styled.input`
    background-color: transparent;
    margin: 0 10px;
`