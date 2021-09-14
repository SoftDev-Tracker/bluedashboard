import React,{useState} from 'react'
import InfoSection from '../../components/InfoSection'
import Navbar from '../../components/Navbar'
import {ContainerFlex, MainButton, Separator} from '../../core-ui/utils'

import { Container, MainSection } from '../../components/Utils'
import HeaderPage from '../../components/HeaderPage'
import FiltrerSection from '../../components/FiltrerSection'
import { CardGrid } from '../../components/ProjectCardsSection/Index'



const FirstPage = () => {

    const tasks = [
        {id:1, title:'New project 1', description:'This is a general description on the project. Here you can add whatever you want.'},
        {id:2, title:'Dashboard element', description:'This is a description on the project.'},
        {id:3, title:'Title 1', description:'This is a general description on the project. Here you can loot all.'},
        {id:4, title:'Side project LUL', description:'This is a general description on the project. Here you can add whatever you want.'},
        {id:5, title:'Title 5', description:'General description on the project. Here you can add whatever you want.'},
    ]

    const [filterTitle, setFilterTitle] = useState("");

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

                    <FiltrerSection setFilterTitle={setFilterTitle}/>
                    <CardGrid tasks={tasks} titleFilter={filterTitle} />

                </Container>
            </MainSection>
        
            
        </>
    )
}

export default FirstPage
