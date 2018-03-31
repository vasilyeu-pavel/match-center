import { combineReducers } from "redux";
import legue from './legue'
import matches from './match'
import filterRound from './filterRound'

export default combineReducers({
    legue: legue,
    matches: matches,
    filterRound: filterRound,
});
