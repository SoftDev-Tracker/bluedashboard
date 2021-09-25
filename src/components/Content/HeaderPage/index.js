import React from 'react'
import { HeaderContainer, Title } from './HeaderPageElements'
import {BsFillLayersFill} from 'react-icons/bs'

const HeaderPage = () => {
    return (
        <HeaderContainer>
            <BsFillLayersFill />

            <Title>
                List of projects
            </Title>
        </HeaderContainer>
    )
}

export default HeaderPage
