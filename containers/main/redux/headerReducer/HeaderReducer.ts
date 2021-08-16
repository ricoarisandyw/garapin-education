import HeaderActionType from "./HeaderActionType";

interface ActionType {
    type: string
    data: any
}

const initialState = {
    cart: 0
}

const headerReducer = function (state = initialState, action: ActionType) {
    switch (action.type) {
        case HeaderActionType.SET_CART:
            return {
                ...state,
                cart: action.data
            };
        default:
            return state;
    }
};

export type HeaderState = typeof initialState
export default headerReducer