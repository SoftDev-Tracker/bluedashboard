import React from 'react'
import { FormContainer, SelectBox, SelectFormContainer } from './SearchBoxElements'
import {FiLayers} from 'react-icons/fi'

const SearchBox = () => {
    return (
        <FormContainer>
            <SelectFormContainer>
                <FiLayers/>
                <SelectBox/>
            </SelectFormContainer>
        </FormContainer>
    )
}

export default SearchBox
