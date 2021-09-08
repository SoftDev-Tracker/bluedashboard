import React from 'react'
import {PageContainer, MainSection} from './PageContentElements'
import { Row } from '../Utils'
import HeaderSection from './HeaderSection'

const PageContent = () => {
    return (

        <PageContainer>
            <Row>
                <HeaderSection></HeaderSection>
            </Row>
        </PageContainer>
    )
}

export default PageContent
