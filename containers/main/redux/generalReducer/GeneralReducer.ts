import GeneralActionType from "./GeneralActionType";

interface ActionType {
    type: string
    data: any
}

const initialState = {
    alert: {
        message: "",
        variant: "",
        keepShow: 0,
    },
    confirmation: {
        message: "",
        onAnswer: (answer: boolean) => {
            // replaced from dispatch
        }
    }
}

const generalReducer = function (state = initialState, action: ActionType) {
    switch (action.type) {
        case GeneralActionType.SET_ALERT:
            return {
                ...state,
                alert: {
                    ...action.data,
                    keepShow: state.alert.keepShow + 1,
                }
            };
        case GeneralActionType.SHOW_CONFIRMATION:
            return {
                ...state,
                confirmation: action.data,
            }
        default:
            return state;
    }
};

export type GeneralState = typeof initialState
export default generalReducer