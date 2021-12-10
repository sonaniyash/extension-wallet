
const Reducer = (state: any, action: any) => {
  switch (action.type) {
      case 'SET_ACCOUNTS':
          return {
              ...state,
              account: action.payload
          };
      case 'ADD_ACCOUNT':
          return {
              ...state,
              account: state.account.concat(action.payload)
          };
      case 'REMOVE_ACCOUNT':
          return {
              ...state,
              account: state.account.filter((acc: any) => acc.id !== action.payload)
          };
      default:
          return state;
  }
};

export default Reducer;