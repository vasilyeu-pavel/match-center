import { combineReducers } from "redux";
import legue from './legue'
import match from './match'

export default combineReducers({
    legue: legue,
    match: match,
});
