const initialState = {
  result: 20,
  historique: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_UN":
      return {
        ...state,
        result: state.result + 1
      };
    case "DECREASE_UN":
      return {
        ...state,
        result: state.result - 1
      };
    case "ADD":
      return {
        ...state,
        result: state.result + action.val
      };
    case "SUBSTRACT":
      return {
        ...state,
        result: state.result - action.val
      };
    case "CREER_HISTORIQUE":
      return {
        ...state,
        historique: state.historique.concat(state.result)
      };
  }
  return state;
};

export default reducer;
