import React,{useState, useContext} from 'react'
import InfoSection from '../../components/Content/InfoSection'
import Navbar from '../../components/Header/Navbar'
import {ContainerFlex, MainButton, Separator} from '../../core-ui/utils'

import { Container, MainSection } from '../../components/Utils'
import HeaderPage from '../../components/Content/HeaderPage'
import FiltrerSection from '../../containers/FiltrerSection'
import { CardGrid } from '../../containers/ProjectCardsSection/Index'
import { UserContext } from '../../context/UserContext'
import TaskForms from '../../containers/TaskForm'
import { ModalContext } from '../../context/ModalContext'

const FirstPage = () => {
    const {tasks} = useContext(UserContext);
    const {handleShow} = useContext(ModalContext)

    const [filterTitle, setFilterTitle] = useState("");

    return (
        <>
            <Navbar />
            <MainSection>
                <Container>
                    <InfoSection></InfoSection>

                    <Separator/>
                    
                    <ContainerFlex alignItems="space-between">
                        <HeaderPage/>
                        <MainButton to="/" onClick={()=>handleShow()}>
                            Button
                        </MainButton>
                    </ContainerFlex>
                    <FiltrerSection setFilterTitle={setFilterTitle}/>
                    <CardGrid tasks={tasks} titleFilter={filterTitle} />
                </Container>
            </MainSection>
            <TaskForms />
        </>
    )
}

export default FirstPage
