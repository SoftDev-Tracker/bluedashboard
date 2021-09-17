import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Sidebar from '../../components/Sidebar'
import { MainSection } from '../../components/Utils'
import PageHeaderSeaction from '../../components/Content/PageHeaderSection'

const AdminPanel = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            
            <MainSection>
                <PageHeaderSeaction />
            </MainSection>
    
        </>
    )
}

export default AdminPanel
