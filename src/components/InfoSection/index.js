import React from 'react'
import { Description, Greeting, HeaderContainer, TextSection, TitleOrganitation } from './InfoSectionElements'
import { BiLayer } from 'react-icons/bi'


const InfoSection = () => {
    return (
        <>
            <HeaderContainer>
                <BiLayer/>
                
                <TextSection>
                    <Greeting>
                        Welcome to our new page!
                    </Greeting>
                    <TitleOrganitation>
                        Organitation example
                    </TitleOrganitation>
                    <Description>
                        To get more information, please check the <a href="/home">documentation</a>.
                    </Description>
                </TextSection>

            </HeaderContainer>
        </>
    )
}

export default InfoSection



const fun  = (num) =>{
    if(num===1)
        return 1
    return num*fun(num-1)
}