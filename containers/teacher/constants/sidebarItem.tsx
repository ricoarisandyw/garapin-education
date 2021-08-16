import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HistoryIcon from '@material-ui/icons/History';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { SideItem } from '../../../components/layout/admin-layout/SidebarList'

export const TEACHER_MENU: SideItem[] = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    to: "/admin/dashboard"
  },
  {
    label: "Class",
    icon: <AttachMoneyIcon />,
    to: "/admin/orders"
  },
  {
    label: "Lesson",
    icon: <ShoppingCartIcon />,
    to: "/admin/products"
  },
  {
    label: "Material",
    icon: <MailOutlineIcon />,
    to: "/admin/message"
  },
  {
    label: "Course",
    icon: <MailOutlineIcon />,
    to: "/admin/message"
  },
]