const Reducer = (state: any, action: any) => {

    switch (action.type) {
        case 'SET_UI':
            const newState = {
                ...state,
                ui: action.payload
            }
            return newState;
        case 'ADD_UI':
            return {
                ...state,
                ui: state.ui.concat(action.payload)
            };
        case 'REMOVE_UI':
            return {
                ...state,
                ui: state.ui.filter((acc: any) => acc.id !== action.payload)
            };
        default:
            return state;
    }
};

export default Reducer;