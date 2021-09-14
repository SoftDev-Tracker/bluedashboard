import React from 'react'
import InfoSection from '../../components/InfoSection'
import Navbar from '../../components/Navbar'
import {ContainerFlex, MainButton, Separator} from '../../core-ui/utils'

import { Container, MainSection } from '../../components/Utils'
import HeaderPage from '../../components/HeaderPage'
import FiltrerSection from '../../components/FiltrerSection'
import { CardGrid } from '../../components/ProjectCardsSection/Index'

const FirstPage = () => {
    return (
        <>
            <Navbar />

            <MainSection>
                <Container>
                    <InfoSection>
                    </InfoSection>

                    <Separator/>

                    <ContainerFlex alignItems="space-between">
                        <HeaderPage/>
                        <MainButton >
                            Button
                        </MainButton>
                    </ContainerFlex>

                    <FiltrerSection/>
                    <CardGrid />

                </Container>
            </MainSection>
        
            
        </>
    )
}

export default FirstPage
