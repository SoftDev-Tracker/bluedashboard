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
                        <LinkElement className="active">
                            <GoDashboard/>
                            <TitleURL>
                                Dashboard
                            </TitleURL>
                        </LinkElement>

                        <LinkElement>
                            <GoTasklist/>
                            <TitleURL>
                                Tasks and Backlog
                            </TitleURL>
                        </LinkElement>

                        <LinkElement>
                            <GoBug/>
                            <TitleURL>
                                Bugs
                            </TitleURL>
                        </LinkElement>

                        <LinkElement>
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
                        <LinkElement>
                            <HiOutlineDocumentReport/>
                            <TitleURL>
                                RSR
                            </TitleURL>
                        </LinkElement>

                        <LinkElement>
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
