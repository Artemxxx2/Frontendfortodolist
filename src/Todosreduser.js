const REQUEST = "REQUEST";
const REQUESTFULLFILLED = "REQUESTFULLFILLED";
const ERROR = "ERROR";
let initalstate = [
  {
    loading: true,
    data: [],
    error:false
  },
];
export const TodosReducer = (state = initalstate, action) => {
  switch (action.type) {
    case REQUEST:
      return {...state,loading:action.loading};
    case ERROR:
      return { ...state, error: action.error };
    case REQUESTFULLFILLED:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export const RequestActionCreator = (loading) => {
  return { type: REQUEST,loading:loading };
};
export const RequestFullfilledActionCreator = (payload) => {
  return { type: REQUESTFULLFILLED, payload: payload };
};
export const REQUESTFAILEDACTIONCREATOR = (error) => {
  return { type: REQUESTFULLFILLED, error: error };
};