import React from 'react'
import { FiltretSectionContainer, SearchBox, SearchButton,SearchForm, CheckSection, Label,CheckBox  } from './FiltrerSectionElements'

import {BiSearch} from 'react-icons/bi'

const FiltrerSection = ( {setFilterTitle} ) => {

    const checkClick = () =>{
        alert("It works!");
    }

    const searchHandle = (value)=>{
        setFilterTitle(value)
    }

    return (
        <FiltretSectionContainer>
            <SearchBox>
                <SearchButton onClick={checkClick}>
                    <BiSearch/>
                </SearchButton>

                <SearchForm type="text" placeholder="Search" onChange={(event) => searchHandle(event.target.value)}>

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
