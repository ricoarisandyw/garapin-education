import {
    AppBar,
    Toolbar,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    MenuItem,
    colors,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NextImage from "../../NextImage";
import Link from "next/link"
import { useRouter } from "next/router";
import MenuList from './MenuList'
import './Header.module.css'
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const useStyles = makeStyles(() => ({
    header: {
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
      display: "flex",
      padding:0,
    },
    logo: {
      textAlign: "left",
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "15px",
    },
    toolbar: {
      display: "flex",
      margin:0,
    },
    drawerContainer: {
      padding: "10px 30px",
    },
    mobileLogo: {},
}));
  
const Header: React.FC = (props) => {
  const router = useRouter()
  const { mobileLogo, header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  function handleUserClick(){
    router.push("/login")
  }

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  const [fillHeader, setFillHeader] = React.useState(false)

  useScrollPosition(
    (props) => {
      if (props.currPos.y < -100) {
        setFillHeader(false)
      } else {
        setFillHeader(true)
      }
    },
    [fillHeader]
  )

  const pawonLogo = (
    <Link href="/" passHref>
      <div className="header-logo" style={{cursor:"pointer",height:"100%",width:"auto"}}>
        <img src="/images/home/Group 1310.png" alt="logo" height={"100%"} style={{ padding: "1.5rem"}} />
      </div>
    </Link>
  );

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {pawonLogo}
        <MenuList type="desktop" />
        <div style={{marginLeft:'auto',cursor:'pointer'}} onClick={handleUserClick}>
          <NextImage src="/images/user.png" alt="User" className="header-user-icon"/>
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <MenuList type="mobile" />
          </div>
        </Drawer>
        <div style={{marginLeft:'auto', cursor:'pointer'}} onClick={handleUserClick}>
          <NextImage src="/images/user.png" alt="User" className="header-user-icon"/>
        </div>
        <div className={mobileLogo}>{pawonLogo}</div>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar elevation={fillHeader ? 0 : 3 } style={{background: fillHeader ? "transparent" : "white"}} className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

export default Header