import { IconButton, TextField, Typography } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react'

interface Props {
    value: string
    onChange: (value: string) => void
}

const InputAndDisplay: React.FC<Props> = (props) => {
    const [editMode, setEditMode] = React.useState(false)

    return (
        <div style={{display:"flex"}}>
            {
                editMode ? 
                <>
                    <TextField value={props.value} style={{flexGrow:1}} id="standard-basic" onChange={(event) => props.onChange(event.target.value)} />
                    <IconButton onClick={() => setEditMode(false)}>
                        <CloseIcon />
                    </IconButton>
                </> :
                <>
                    <Typography style={{flexGrow:1, margin:"auto 0"}}>{props.value}</Typography> 
                    <IconButton onClick={() => setEditMode(true)}>
                        <CreateIcon />
                    </IconButton>
                </>
            }
        </div>
    )
}

export default InputAndDisplay