import { CSSProperties } from "react";

export const drawerWidth = 240;

const style: {[key: string]: CSSProperties} = {
      root: {
        display: 'flex',
        minHeight: "100vh",
        background: "#C4E538"
      },
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '8px',
        minHeight: '64px',
        minWidth: drawerWidth,
      },
      appBar: {
        zIndex: 1201,
        transition: "width cubic-bezier(0.4, 0, 0.6, 1) 195ms",
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: "width cubic-bezier(0.4, 0, 0.6, 1) 195ms",
      },
      menuButton: {
        marginRight: 36,
      },
      menuButtonHidden: {
        display: 'none',
      },
      title: {
        flexGrow: 1,
      },
      appBarSpacer: {
        minHeight: '64px'
      },
      content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
        paddingTop: 16,
        paddingBottom: 16,
      },
      paper: {
        padding: 8,
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 240,
      },
}

export default style