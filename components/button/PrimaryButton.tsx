import { Button } from "@material-ui/core"
import React from "react"

interface Props {
    onClick?: ()=>void
}

const PrimaryButton:React.FC<Props> = (props) => {
    const handleClick = () => {
        if(props.onClick) props.onClick()
    }

    return (
        <Button className="button-primary-gradient" onClick={handleClick}>
            {props.children}
        </Button>
    )
}

export default PrimaryButton