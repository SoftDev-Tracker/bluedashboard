import React from 'react'
import SearchBox from './SearchBox'
import { SidebarContainer, SidebarList } from './SidebarElements'


const Sidebar = () => {
    return (
        <>
            <SidebarContainer>
                <SidebarList>  
                    <SearchBox/>
                </SidebarList>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
