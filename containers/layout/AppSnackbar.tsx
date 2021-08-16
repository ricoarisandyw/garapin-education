import React from 'react'
import { Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reduxStore';
import GeneralActionType from '../main/redux/generalReducer/GeneralActionType';
import _ from 'lodash';
import { GeneralState } from '../main/redux/generalReducer/GeneralReducer';

// CONFIG
const SNACK_DURATION = 6000

const variantColor = (variant: string) => {
    switch(variant){
      case "success" : return "#2ecc71"
      case "danger" : return "#e74c3c"
      case "warning": "return #f1c40f"
      default : return ""
    }
}

const AppSnackbar = () => {
    const dispatch = useDispatch()
    const {alert} = useSelector<RootState, GeneralState>((state) => state.generalReducer)
    const [open, setOpen] = React.useState(false)

    function closeAlert(){
        console.log("I RUN", alert.message)
        setOpen(false)
        dispatch({
          type: GeneralActionType.SET_ALERT,
          data: {
            message: "",
            variant: ""
          }
        })
      }
    
      React.useEffect(() => {
        if(alert.message !== "") {
          setOpen(true)
          _.debounce(closeAlert, SNACK_DURATION)()
        }
      }, [alert.message])

    return (
        <Snackbar 
          open={open} 
          message={alert.message} 
          resumeHideDuration={SNACK_DURATION}
          ContentProps={{
            "aria-describedby": "message-id",
            style: {
              backgroundColor: variantColor(alert.variant),
            }
          }}
        />
    )
}

export default AppSnackbar