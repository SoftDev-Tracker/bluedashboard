import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { MainSection } from '../../components/Utils'
import PageContent from '../../components/PageContent'

const AdminPanel = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            
            <MainSection>
                <PageContent />
            </MainSection>
    
        </>
    )
}

export default AdminPanel
