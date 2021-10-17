import { createStore,combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {TodosReducer} from './Todosreduser'

let redusers = combineReducers({
    TodosReducer:TodosReducer
})
let store = createStore(redusers,applyMiddleware(thunk))
 export default store