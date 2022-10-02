const INITIAL_STATE = {
	panelActive: 'Home'
};

export const panelSelectionReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_TOP_PANEL':
			return {
				...state,
				panelActive: action.payload
			};
		default:
			return state;
	}
};
