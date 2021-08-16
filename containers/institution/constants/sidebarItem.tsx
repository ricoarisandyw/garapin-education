import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HistoryIcon from '@material-ui/icons/History';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { SideItem } from '../../../components/layout/admin-layout/SidebarList'

export const INSTITUTION_MENU: SideItem[] = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    to: "/admin/dashboard"
  },
  {
    label: "Teacher",
    icon: <AttachMoneyIcon />,
    to: "/admin/orders"
  },
  {
    label: "Student",
    icon: <ShoppingCartIcon />,
    to: "/admin/products"
  },
  {
    label: "Messages",
    icon: <MailOutlineIcon />,
    to: "/admin/message"
  },
]