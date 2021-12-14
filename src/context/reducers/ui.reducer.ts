
export const UIReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_UI':
            return {
                ...state,
                ui: action.payload
            };
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

export default UIReducer;

