import { combineReducers } from 'redux';
import { panelSelectionReducer } from './panel/reducer';

const rootReducer = combineReducers({
	upperPanel: panelSelectionReducer
});
export default rootReducer;
