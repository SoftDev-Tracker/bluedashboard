import React from 'react'

import { Grid, Card, TopSection, Title, EditButton, Description,
 InfoSection, Section, TitleInfo, DescriptionInfo, StateLabel} from './ProjectCardsElements'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BiCalendar} from 'react-icons/bi'
import {FaDotCircle} from 'react-icons/fa'

export const CardGrid = ({tasks, titleFilter=""}) =>{

    return(
        <Grid>
            { tasks.filter(task=>{
                return task.title.toLowerCase().indexOf(titleFilter.toLowerCase())>=0;
            }).map( (task) => {
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