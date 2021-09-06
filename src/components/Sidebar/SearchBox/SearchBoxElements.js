import styled from 'styled-components'

export const FormContainer = styled.div`
    border-bottom: 1px solid #D0D0D0;
    margin-top: 3rem;
    padding: 1rem;
`

export const SelectFormContainer = styled.div`
    border: 1px solid #D0D0D0;
    border-radius: 4px;
    display: flex;
    padding: 5px;

    svg{
        color: #2670FF;
        font-size: 20px;
        margin: 0 5px
    }
`

export const TitleGroup = styled.div`
    color: #A0A0A0;
    font-size: 12px;
    text-transform: uppercase;
`


export const SelectBox = styled.input.attrs(props=>({
    type: "search",
    placeholder: "Project name..."
}))`border: none;
    width: 100%;
    &:focus{
        outline: none;
    }`
