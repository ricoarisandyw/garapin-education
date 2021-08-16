import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import adminReducer from "./containers/admin/redux/adminReducer/AdminReducer";
import generalReducer from "./containers/main/redux/generalReducer/GeneralReducer";
import headerReducer from "./containers/main/redux/headerReducer/HeaderReducer";


let store = createStore(combineReducers({
    generalReducer: generalReducer,
    adminReducer: adminReducer,
    headerReducer: headerReducer,
}), applyMiddleware(logger))

export type RootState = ReturnType<typeof store.getState>
export default store