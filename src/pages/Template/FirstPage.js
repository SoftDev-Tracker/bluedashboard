import React from 'react'
import InfoSection from '../../components/InfoSection'
import Navbar from '../../components/Navbar'

import { Container, MainSection } from '../../components/Utils'

const FirstPage = () => {
    return (
        <>
            <Navbar />

            <MainSection>
                <Container>
                    <InfoSection>
                    </InfoSection>
                </Container>
            </MainSection>
    
            
        </>
    )
}

export default FirstPage
