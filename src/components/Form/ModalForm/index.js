import styled from 'styled-components'
import {css} from '../../../core-ui/css/variables'
import {FiInfo} from 'react-icons/fi'
import {IoMdCloseCircleOutline} from 'react-icons/io'

export const Modal = styled.div`
    position: fixed; /* Stay in place */
    z-index: 10; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

export const FormContainer = styled.div`
    width: 100%;
    max-width: 800px;
    position: relative;
    border-radius: 5px;
    overflow: auto;
    cursor: default;
    box-sizing: border-box;
    margin: 6% auto;
`

export const Form = styled.form`
    background: #ffffff;
    padding: 1.5rem;
`

export const FormHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg{
        font-size: 20px;
        margin-right: 0.5rem;
        cursor: pointer;
    }
`

export const TitleForm = styled.h3`
    color: ${css.colorSecundary};
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    margin-right: auto;
`

export const FormHeader = ({title, handleClose})=>{
    return(
        <FormHeaderContainer>
            <FiInfo/>
            <TitleForm>
                {title}
            </TitleForm>
            <IoMdCloseCircleOutline style={{"font-size":"24px"}} onClick={handleClose} />
        </FormHeaderContainer>
    )
}