import React,{useContext} from 'react'

import { Grid, Card, TopSection, Title, EditButton, Description,
 InfoSection, Section, TitleInfo, DescriptionInfo, StateLabel} from './ProjectCardsElements'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BiCalendar} from 'react-icons/bi'
import {FaDotCircle} from 'react-icons/fa'

export const CardGrid = () =>{

    const tasks = [
        {id:1, title:'New project 1', description:'This is a general description on the project. Here you can add whatever you want.'},
        {id:2, title:'Dashboard element', description:'This is a description on the project.'},
        {id:3, title:'Title 1', description:'This is a general description on the project. Here you can loot all.'},
        {id:4, title:'Side project LUL', description:'This is a general description on the project. Here you can add whatever you want.'},
        {id:5, title:'Title 5', description:'General description on the project. Here you can add whatever you want.'},
    ]


    return(
        <Grid>
            { tasks.map( (task) => {
                return (<CardElement key={task.key} title={task.title} description={task.description} />)
            }) }
        </Grid>
    );
}


export const CardElement = ({ key, title, description}) => {
    return (
        <Card key={key}>
            <TopSection>
                <Title> { title ? title : 'Default title' }</Title>
                <EditButton>
                    <BsThreeDotsVertical/>
                </EditButton>
            </TopSection>
            
            <Description>
                { description }
            </Description>

            <InfoSection>
                <Section>
                    <TitleInfo> <BiCalendar/> Date limit</TitleInfo>
                    <DescriptionInfo>10/10/21</DescriptionInfo>
                </Section>
                <Section>
                    <TitleInfo>Complete</TitleInfo>
                    <DescriptionInfo>100%</DescriptionInfo>
                </Section>
                <Section>
                    <TitleInfo>State</TitleInfo>
                    <DescriptionInfo> 
                        <StateLabel>
                            <FaDotCircle style={ {color:'#4c734c'} }/> <span>Active</span>
                        </StateLabel>        
                    </DescriptionInfo>
                </Section>
            </InfoSection>
        </Card>
    )
}