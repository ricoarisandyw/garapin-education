import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SidebarList, { SideItem } from './SidebarList';
import {drawerWidth} from './style'
import { makeStyles } from '@material-ui/core';
import AdminAppBar from './AdminAppBar';
import style from './style'

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}))

interface Props {
  items: SideItem[]
}

const AdminLayout: React.FC<Props> = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = (value:boolean) => {
    setOpen(value)
  } 
  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div style={style.root}>
      <CssBaseline />
      <AdminAppBar handleDrawerOpen={handleDrawerOpen} items={props.items} open={open} />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(!open && classes.drawerPaperClose, classes.drawerPaper ),
        }}
        open={open}
      >
        <div style={style.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <SidebarList listItem={props.items} />
        <Divider />
      </Drawer>
      <main style={style.content}>
        <div style={style.appBarSpacer} />
        <Container style={style.container}>
          <div>
            {props.children}
          </div>
        </Container>
      </main>
    </div>
  );
}

export default AdminLayout