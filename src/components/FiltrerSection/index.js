import React from 'react'
import { FiltretSectionContainer, SearchBox, SearchButton,SearchForm, CheckSection, Label,CheckBox  } from './FiltrerSectionElements'

import {BiSearch} from 'react-icons/bi'

const FiltrerSection = () => {

    const checkClick = () =>{
        alert("It works!");
    }

    return (
        <FiltretSectionContainer>
            <SearchBox>
                <SearchButton onClick={checkClick}>
                    <BiSearch/>
                </SearchButton>

                <SearchForm type="text" placeholder="Search">

                </SearchForm>
            </SearchBox>
            <CheckSection>
                <Label>
                    <CheckBox type="checkbox"/>
                    Show only active elements
                </Label>
            </CheckSection>
        </FiltretSectionContainer>
    )
}

export default FiltrerSection
