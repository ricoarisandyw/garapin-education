import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reduxStore';
import GeneralActionType from '../main/redux/generalReducer/GeneralActionType';
import { GeneralState } from '../main/redux/generalReducer/GeneralReducer';

const AppConfirmation = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);

    const {confirmation} = useSelector<RootState, GeneralState>((state) => state.generalReducer)
    
    const handleClose = () => {
        setOpen(false);
        dispatch({
            type: GeneralActionType.SHOW_CONFIRMATION,
            data: {
                message: "",
                onAnswer: () => {
                    // delete function
                }
            }
        })
    };

    const onAnswer = (answer:boolean) => {
        return () => {
            confirmation.onAnswer(answer)
            handleClose()
        }
    }

    React.useEffect(() => {
        if(confirmation.message !== "") {
          setOpen(true) 
        }
      }, [confirmation.message])

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Konfirmasi</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {confirmation.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onAnswer(true)} color="primary">
            YA
          </Button>
          <Button onClick={onAnswer(false)} color="primary" autoFocus>
            TIDAK
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default AppConfirmation