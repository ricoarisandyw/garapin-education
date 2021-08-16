import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HistoryIcon from '@material-ui/icons/History';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { SideItem } from '../../../components/layout/admin-layout/SidebarList'

export const ADMIN_MENU: SideItem[] = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    to: "/admin/dashboard"
  },
  {
    label: "",
    icon: <AttachMoneyIcon />,
    to: "/admin/orders"
  },
  {
    label: "Products",
    icon: <ShoppingCartIcon />,
    to: "/admin/products"
  },
  {
    label: "Messages",
    icon: <MailOutlineIcon />,
    to: "/admin/message"
  },
  {
    label: "Histories",
    icon: <HistoryIcon />,
    to: "/admin/history"
  }
]