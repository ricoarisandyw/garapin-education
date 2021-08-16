import { Button, MenuItem } from '@material-ui/core';
import Link from 'next/link';
import React from 'react'
import { HeaderMenu } from './constant/header-menu';

interface Props {
    type: "mobile" | "desktop"
}

const style = {
    menuButton : {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "15px",
    }
}

const MenuList: React.FC<Props> = (props) => {
    HeaderMenu.map(({ label, href }) => {
        if(props.type === "mobile")
            return (
                <Link href={href} passHref key={label}>
                <Button
                    style={style.menuButton}
                >
                    {label}
                </Button>
                </Link>
            );
        else
            return (
                <Link
                  href={href}
                  passHref
                  key={label}
                >
                  <MenuItem color={"inherit"} style={{ textDecoration: "none"}}>{label}</MenuItem>
                </Link>
            );
    });

    return <div>
        
    </div>
}

export default MenuList