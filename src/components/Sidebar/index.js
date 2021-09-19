import React from 'react'
import SearchBox from './SearchBox'
import { SidebarContainer, SidebarList, 
    LinkGroup, LinkElement, TitleSeparator,
    TitleURL } from './SidebarElements'

import { GoDashboard, GoTasklist, GoBug } from 'react-icons/go';
import { AiOutlineUser } from 'react-icons/ai'
import {HiOutlineDocumentReport} from 'react-icons/hi'


const Sidebar = () => {



    return (
        <>
            <SidebarContainer>
                <SidebarList>  
                    <SearchBox/>

                    <TitleSeparator>
                        Options
                    </TitleSeparator>
                    <LinkGroup>
                        <LinkElement exact to="/project">
                            <GoDashboard/>
                            <TitleURL>
                                Dashboard
                            </TitleURL>
                        </LinkElement>

                        <LinkElement to="/project/task" >
                            <GoTasklist/>
                            <TitleURL>
                                Tasks and Backlog
                            </TitleURL>
                        </LinkElement>

                        <LinkElement to="/project/bugs">
                            <GoBug/>
                            <TitleURL>
                                Bugs
                            </TitleURL>
                        </LinkElement>

                        <LinkElement to="/project/members">
                            <AiOutlineUser/>
                            <TitleURL>
                                Members
                            </TitleURL>
                        </LinkElement>
                    </LinkGroup>

                    <TitleSeparator>
                        Reports 
                    </TitleSeparator>
                    <LinkGroup>
                        <LinkElement to="/project/srs">
                            <HiOutlineDocumentReport/>
                            <TitleURL>
                                SRS
                            </TitleURL>
                        </LinkElement>

                        <LinkElement to="/project/psp"> 
                            <HiOutlineDocumentReport/>
                            <TitleURL>
                                PSP
                            </TitleURL>
                        </LinkElement>

                    </LinkGroup>
                </SidebarList>
            </SidebarContainer>




        </>
    )
}

export default Sidebar
