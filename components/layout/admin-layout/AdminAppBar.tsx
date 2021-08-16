import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core'
import React, { CSSProperties } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useRouter } from 'next/router';
import { SideItem } from './SidebarList';
import style from './style'

interface Props {
    items: SideItem[]
    open: boolean
    handleDrawerOpen:(open: boolean)=>void
}

const AdminAppBar: React.FC<Props> = (props) => {
    /* === Get Title === */
  const router = useRouter()

  const getTitle = () => {
    const foundItem = props.items.find((item) => item.to === router.pathname)
    return foundItem ? foundItem.label : ""
  }
  
    const handleDrawerOpen = () => {
        props.handleDrawerOpen(true)
      };
      const combine = (styleA: CSSProperties, styleB: CSSProperties): CSSProperties => {
        return {
          ...styleA,
          ...styleB
        }
      }
    return (
        <AppBar position="absolute" style={combine(style.appBar, props.open ? style.appBarShift : {})}>
        <Toolbar style={style.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            style={combine(style.menuButton, props.open ? style.menuButtonHidden : {})}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap style={style.title}>
            {getTitle()}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    )
}

export default AdminAppBar