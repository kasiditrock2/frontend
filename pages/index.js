import React from 'react'
import AdminHeader from '../components/layouts/admin.header'
import AdminSidebar from '../components/layouts/admin.sidebar'
import AdminContent from '../components/layouts/admin.content'
import AdminFooter from '../components/layouts/admin.footer'
const Home = () => {
    return (
        <div>
            <AdminHeader />
            <AdminSidebar />
            <AdminContent />
            <AdminFooter />
        </div>
    )
}

export default Home  
