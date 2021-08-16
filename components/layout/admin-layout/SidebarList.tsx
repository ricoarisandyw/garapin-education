import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { useRouter } from 'next/router';
import React from 'react'

export interface SideItem {
    label: string
    icon: JSX.Element
    to: string
}

interface Props {
    listItem: SideItem[]
}

const SidebarList:React.FC<Props> = (props) => {
    const router = useRouter()

    const handleLink = (link: string) => {
        router.push(link)
    }

    /* SidebarItem */
    const sidebarItem = props.listItem.map((item) => (
        <ListItem key={item.label} button onClick={() => handleLink(item.to)}>
            <ListItemIcon>
                {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
        </ListItem>
    ))

    return <List>
        {sidebarItem}
    </List>
}

export default SidebarList