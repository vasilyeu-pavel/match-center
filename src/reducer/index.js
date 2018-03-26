import { combineReducers } from "redux";
import legue from './legue'
import match from './match'
import filterRound from './filterRound'

export default combineReducers({
    legue: legue,
    match: match,
    filterRound: filterRound,
});
