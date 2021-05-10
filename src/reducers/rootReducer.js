import {combineReducers} from "redux";
import {userReducer} from "./userReducer"
import {serviceReducer} from "./productReducer"
const rootReducer=combineReducers({
    user: userReducer,
    service: serviceReducer
});
export default rootReducer;