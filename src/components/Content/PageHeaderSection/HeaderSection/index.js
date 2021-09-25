import React from 'react'
import { HeaderContainer, Title, Breadcrum, ProjectName, TitleSection, LinkBreadcrum} from './HeaderSectionElements'
import { GoDashboard } from 'react-icons/go'

const HeaderSection = () => {
    return (
        <HeaderContainer>
            <Breadcrum>
                <LinkBreadcrum>Home</LinkBreadcrum>
                Dashboard
            </Breadcrum>

            <TitleSection>
                <GoDashboard/>
                <Title>
                    Dashboard
                </Title>
                <ProjectName>
                    Name of the project
                </ProjectName>
            </TitleSection>
        </HeaderContainer>
    )
}

export default HeaderSection
