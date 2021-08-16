// components/Layout.js
import { useRouter } from 'next/router';
import React from 'react';
import AdminLayout from '../components/layout/admin-layout/AdminLayout';
import { ADMIN_MENU } from './admin/constants/sidebarItem';
import AppSnackbar from './layout/AppSnackbar';
import AppConfirmation from './layout/AppConfirmation';
import PublicLayout from '../components/layout/public-layout/PublicLayout';
import { SideItem } from '../components/layout/admin-layout/SidebarList';
import { INSTITUTION_MENU } from './institution/constants/sidebarItem';
import { TEACHER_MENU } from './teacher/constants/sidebarItem';

const Layout:React.FC = (props) => {
  const [menu, setMenu] = React.useState<SideItem[]>([])
  const router = useRouter()
  const { children } = props

  function decideLayout(){
    return router.pathname.includes('/admin') || router.pathname.includes('/institution') || router.pathname.includes('/teacher')
  }

  function decideMenu(){
    if(router.pathname.includes('/admin'))
      setMenu(ADMIN_MENU)
    else if(router.pathname.includes('/institution'))
      setMenu(INSTITUTION_MENU)
    else if(router.pathname.includes('/teacher'))
      setMenu(TEACHER_MENU)
  }

  React.useEffect(() => {
    decideMenu()
  },[router.pathname])

  return (
    <div className='layout'>
        { decideLayout() ? 
        <AdminLayout items={menu}>{children}</AdminLayout>
        :
        <PublicLayout>
            <div className="mainBody">
              {children}
            </div>
        </PublicLayout>
        }
        {/* GENERAL PLUGIN */}
        <AppSnackbar />
        <AppConfirmation />
    </div>
  )
}

export default Layout