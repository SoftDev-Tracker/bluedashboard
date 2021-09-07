import React from 'react'
import {PageContainer, MainSection} from './PageContentElements'
import { Row } from '../Utils'
import HeaderSection from './HeaderSection'

const PageContent = () => {
    return (
        <MainSection> 
            <PageContainer>
                <Row>
                    <HeaderSection></HeaderSection>
                </Row>
            </PageContainer>
        </MainSection>
    )
}

export default PageContent
