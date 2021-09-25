import styled from "styled-components";
import { css } from "../../core-ui/css/variables";

export const FormGroup = styled.div`
    margin: 0.8rem 0;
    display: block;

    input, textarea{
        background-color: ${css.colorInput};
        border-radius: 6px;
        border: 1px solid #cecece;
        box-sizing: border-box;
        display: block;
        padding: 8px;
        width: 100%;
        
        &:focus{
            outline: none;
        }
    }
`

export const InputText = styled.input`    
    &:checked {
        color: red;
    }
`

export const LiRadio = styled.li`
    border-color: #e2e8f0;
    list-style: none;
    position: relative;
    cursor: pointer;
`

export const UlRadio = styled.ul`
    display:  flex;
`

export const RadioButtonToggle = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
`

export const TextArea = styled.textarea`
    min-height: calc(4em + .9rem + 2px);
    resize: none;
`

export const Label = styled.label`
    color: ${css.colorGray};
    display: flex;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 0.5rem;
`

export const COL50 = styled.div`
    width: 50%;
    padding-right: 0.9rem;

`