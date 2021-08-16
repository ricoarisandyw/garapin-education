import ActionType from "./ActionType";

interface ActionType {
  type: string
  data: any
}

const initialState = {
  header: ""
}

const adminReducer = function (state = initialState, action: ActionType) {
  switch (action.type) {
    case ActionType.SET_HEADER:
      return {
        ...state,
        header: action.data
      };
    default:
      return state;
  }
};

export type AdminState = typeof initialState
export default adminReducer