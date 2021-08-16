import { Button } from "@material-ui/core"
import React from "react"

const TagButton:React.FC = (props) => {
    return (
        <Button className="button-tag">
            {props.children}
        </Button>
    )
}

export default TagButton