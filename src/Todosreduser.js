const REQUEST = "REQUEST";
const REQUESTFULLFILLED = "REQUESTFULLFILLED";
const ERROR = "ERROR";
const CHANGETITLE = 'CHANGETITLE'
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
    case CHANGETITLE:
       let element = state.data.find(item =>item._id === action.id);
       element.title = action.data
        return { ...state};
    default:
      return state;
  }
};
export const ChangeValueActionCreator = (data,id) => {
  return { type: CHANGETITLE,data:data,id:id };
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