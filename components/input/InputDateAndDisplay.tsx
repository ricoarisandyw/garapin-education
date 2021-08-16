import { IconButton, TextField, Typography } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react'
import {
    DatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { format } from 'date-fns';
  

interface Props {
    value: Date
    onChange: (value: Date) => void
}

const InputDateAndDisplay: React.FC<Props> = (props) => {
    const [editMode, setEditMode] = React.useState(false)

    const onChange = (date: MaterialUiPickersDate) => {
        props.onChange(date as Date)
    }

    return (
        <div style={{display:"flex"}}>
            {
                editMode ? 
                <>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker style={{width:"100%"}} format="dd/MM/yyyy" value={props.value} onChange={onChange} />
                    </MuiPickersUtilsProvider>
                    <IconButton onClick={() => setEditMode(false)}>
                        <CloseIcon />
                    </IconButton>
                </> :
                <>
                    <Typography style={{flexGrow:1, margin:"auto 0", width:"auto"}}>Date : {format(props.value, "dd/MM/yyyy")}</Typography> 
                    <IconButton onClick={() => setEditMode(true)}>
                        <CreateIcon />
                    </IconButton>
                </>
            }
        </div>
    )
}

export default InputDateAndDisplay